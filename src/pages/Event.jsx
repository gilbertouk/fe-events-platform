import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import { eventsExamples } from "@/mockData/events";
import CalendarDays from "@/components/icons/CalendarDays";
import MapPin from "@/components/icons/MapPin";
import { Button } from "@/components/ui/button";

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      const eventObg = eventsExamples.filter((e) => e.id === id);
      setEvent(...eventObg);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 bg-gray-100 rounded-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <main className="bg-gray-100">
      <div className="max-w-screen-xl w-auto mx-auto">
        <section className="mb-3">
          <AspectRatio ratio={3 / 1} className="bg-muted">
            <img
              alt="Event banner"
              src="/event.png"
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
          <div className="shadow-xl shadow-gray-300 h-fit bg-white p-4 xl:p-8">
            <h2 className="font-roboto font-bold text-base sm:text-xl lg:text-2xl">
              Event Detail
            </h2>
            <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-gray-500 flex gap-3 justify-start items-center">
              <CalendarDays /> {event.date}
            </p>
            <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-gray-500 flex gap-3 justify-start items-center">
              <MapPin /> {event.location}
            </p>
            <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-gray-500 flex gap-3 justify-start items-center">
              &nbsp;
              {event.price === "Free" ? `${event.price}` : `£ ${event.price}`}
            </p>
            <hr className="my-4" />
            <div className="flex flex-row justify-between items-center mt-3 gap-1 lg:gap-4">
              <Button className="w-24 sm:w-32">Buy Now</Button>
              <Button className="w-auto">Add to Calendar</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EventPage;
