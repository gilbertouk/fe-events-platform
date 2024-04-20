import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../services/api";

import moment from "moment";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import CalendarDays from "@/components/icons/CalendarDays";
import MapPin from "@/components/icons/MapPin";
import { Button } from "@/components/ui/button";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import ResourceNotAvailable from "@/components/ResourceNotAvailable";

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <main className="bg-gray-100 min-h-screen">
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
              <div className="shadow-xl shadow-gray-300 h-fit bg-white p-4 xl:p-8 space-y-5">
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
                    {`${event?.address}, ${event?.city}, ${event?.postcode} - ${event?.country}`}
                  </p>
                </div>

                <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-gray-500 flex gap-3 justify-start items-center">
                  &nbsp;
                  {event.price === "Free"
                    ? `${event.price}`
                    : `£ ${event.price}`}
                </p>
                <hr className="my-4" />
                <div className="flex flex-row justify-between items-center mt-3 gap-1 lg:gap-4">
                  <Button className="w-24 sm:w-32">Buy Now</Button>
                  <Button className="w-auto">Add to Calendar</Button>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default EventPage;
