import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import { api } from "../services/api";
import usePrivateAxios from "@/hooks/usePrivateAxios";

import moment from "moment";

import { Toaster, toast } from "sonner";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CalendarDays from "@/components/icons/CalendarDays";
import MapPin from "@/components/icons/MapPin";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import ResourceNotAvailable from "@/components/ResourceNotAvailable";
import Alert from "@/components/Alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2Icon } from "lucide-react";

const schema = z
  .object({
    qtd: z.number().or(z.string()).pipe(z.coerce.number()),
  })
  .refine(
    (data) => {
      if (data.qtd <= 0 || data.qtd > 10) return false;
      return true;
    },
    {
      message: "Quantity must be a positive number between 1 and 10",
      path: ["qtd"],
    },
  );

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [isRequestOrder, setIsRequestOrder] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const tokenGoogle = localStorage.getItem("tokenGoogle");
  const userData = JSON.parse(localStorage.getItem("user"));
  const privateAxios = usePrivateAxios();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      qtd: "",
    },
  });

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      api
        .get(`/event/${id}`)
        .then((response) => setEvent(response.data.body))
        .catch((error) => {
          if (error.response.status === 404) {
            setError(null);
          } else {
            setError(error);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  const handleAddEventToCalendar = async () => {
    const startDate = new Date(event.dateStart);
    const endDate = new Date(event.dateEnd);
    startDate.setHours(startDate.getUTCHours());
    endDate.setHours(endDate.getUTCHours());

    const eventModel = {
      summary: event?.name,
      location: `${event?.address}, ${event?.city}, ${event?.postcode} - ${event?.country}`,
      description: event?.description,
      start: {
        dateTime: startDate,
      },
      end: {
        dateTime: endDate,
      },
    };

    try {
      await axios.post(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        eventModel,
        {
          headers: {
            Authorization: "Bearer " + tokenGoogle,
            "Content-Type": "application/json",
          },
        },
      );
      handleToast(true);
    } catch (error) {
      handleToast(false);
    }
  };

  const handleToast = (success) => {
    if (success) {
      toast.success("Event successfully added to your Google Calendar!");
    } else {
      toast.error("Failed to add event to calendar");
    }
  };

  const handleBuy = async (data) => {
    try {
      setIsRequestOrder(true);
      localStorage.removeItem("order");

      if (event?.price === "Free") {
        const response = await privateAxios.post("/order/create-free-order", {
          quantity: data.qtd,
          email: userData.email,
          eventId: event.id,
        });

        const eventData = {
          id: response.data.body.id,
          quantity: response.data.body.tickets,
          price: event.price,
        };

        localStorage.setItem("order", JSON.stringify(eventData));

        navigate("/checkout?success=true");
        return;
      }

      const response = await privateAxios.post(
        "/order/create-checkout-session",
        {
          quantity: data.qtd,
          priceStripeId: event.priceStripeId,
          email: userData.email,
          name: userData.firstName + " " + userData.surname,
          eventId: event.id,
        },
      );

      const eventData = {
        id: response.data.body.order.id,
        quantity: response.data.body.order.tickets,
        price: event.price,
      };

      localStorage.setItem("order", JSON.stringify(eventData));

      const redirectUrl = response.data.body.session.url;

      if (redirectUrl) {
        setRedirectLink(redirectUrl);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsRequestOrder(false);
    }
  };

  if (redirectLink) {
    window.location.href = redirectLink;
    return null;
  }

  return (
    <main className="bg-gray-100 min-h-screen">
      <Toaster closeButton richColors />
      {redirectLink && <p>Redirecting to checkout...</p>}
      <div className="max-w-screen-xl w-auto mx-auto">
        {isLoading && <Loading />}
        {!isLoading && error && <Error />}
        {!isLoading && !error && !event && (
          <ResourceNotAvailable
            title="Event Not Found"
            text="We're sorry, but the event you are trying to access does not exist. Please double-check the link or contact support for assistance."
            showLink={true}
          />
        )}
        {!isLoading && !error && event && (
          <>
            <section className="mb-3">
              <AspectRatio ratio={3 / 1} className="bg-muted">
                <img
                  alt="Event banner"
                  src={event?.logoUrl}
                  className="w-full h-full object-cover rounded-sm rounded-t-none"
                />
              </AspectRatio>
            </section>
            <section className="flex flex-col gap-4 lg:flex-row py-8 mx-3 xl:mx-0">
              <div className="text-start shadow-xl shadow-gray-300 bg-white p-4 xl:p-8">
                <h1 className="font-roboto text-center font-bold mb-6 text-lg sm:text-2xl lg:text-4xl sm:mb-8 lg:mb-12">
                  {event.name}
                </h1>
                <h2 className="font-roboto font-bold text-base sm:text-xl lg:text-2xl">
                  Event Description
                </h2>
                <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-gray-500">
                  {event.description}
                </p>
                <h2 className="font-roboto font-bold text-base sm:text-xl lg:text-2xl mt-3 sm:mt-6">
                  Event Information
                </h2>
                <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-gray-500">
                  {event.information}
                </p>
              </div>
              <div className="shadow-xl shadow-gray-300 h-fit bg-white p-4 xl:p-8 space-y-5 min-w-0 lg:min-w-fit">
                <h2 className="font-roboto font-bold text-base sm:text-xl lg:text-2xl">
                  Event Detail
                </h2>
                <div className="flex justify-start items-center gap-3">
                  <div>
                    <CalendarDays />
                  </div>
                  <p className="text-start text-sm sm:text-base text-gray-500">
                    {moment
                      .utc(event?.dateStart)
                      .format("ddd, DD MMM YYYY - H:mm")}
                  </p>
                </div>

                <div className="flex justify-start items-center gap-3">
                  <div>
                    <CalendarDays />
                  </div>
                  <p className="text-start text-sm sm:text-base text-gray-500">
                    {moment
                      .utc(event?.dateEnd)
                      .format("ddd, DD MMM YYYY - H:mm")}
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div>
                    <MapPin />
                  </div>
                  <p className="text-start text-sm sm:text-sm text-gray-500">
                    {`${event?.address}, ${event?.city}`} <br />
                    {`${event?.postcode} - ${event?.country}`}
                  </p>
                </div>

                <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-gray-500 flex gap-3 justify-start items-center">
                  &nbsp;
                  {event?.price === "Free"
                    ? `${event?.price}`
                    : `£ ${event?.price}`}
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleBuy)}>
                    <div>
                      <FormField
                        className="text-right"
                        control={form.control}
                        name="qtd"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <FormControl>
                              <Input
                                className="w-fit sm:w-auto"
                                required
                                type="number"
                                placeholder="Quantity"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="w-fit sm:max-w-64" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <hr className="my-4" />
                    <div className="flex flex-row justify-between items-center mt-3 gap-1 lg:gap-4">
                      <Button
                        className="w-24 sm:w-32"
                        type="submit"
                        // onClick={handleBuy}
                        disabled={isRequestOrder}
                      >
                        {isRequestOrder ? (
                          <>
                            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                          </>
                        ) : (
                          <>Buy Now</>
                        )}
                      </Button>
                      {tokenGoogle && (
                        <Alert
                          buttonTitle="Add to Calendar"
                          alertTitle="Are you sure?"
                          alertText='When you click "Continue," the event details will be added to your Google Calendar. If you disagree, you can click "Cancel."'
                          func={handleAddEventToCalendar}
                        />
                      )}
                    </div>
                  </form>
                </Form>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default EventPage;
