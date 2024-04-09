import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { AspectRatio } from '@/components/ui/aspect-ratio';

import { eventsExamples } from '@/mockData/events';
import CalendarDays from '@/components/icons/CalendarDays';
import MapPin from '@/components/icons/MapPin';
import { Button } from '@/components/ui/button';

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
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <main className="max-w-screen-xl w-auto mx-auto mb-12 lg:mb-8">
      <section>
        <AspectRatio ratio={3 / 1} className="bg-muted">
          <img
            alt="Event banner"
            src="/event.png"
            className="w-full h-full object-cover rounded-sm rounded-t-none"
          />
        </AspectRatio>
      </section>
      <section className="flex flex-col mt-4 gap-4 lg:flex-row m-3 lg:m-0 lg:mt-3">
        <div className="my-8 text-start shadow-xl shadow-gray-300 p-3">
          <h1 className="font-roboto text-center font-bold mb-6 text-lg sm:text-2xl lg:text-4xl sm:mb-8 lg:mb-12">
            {event.name}
          </h1>
          <h2 className="font-roboto font-bold text-base sm:text-xl lg:text-2xl">
            Event Description
          </h2>
          <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-slate-500">
            {event.description}
          </p>
          <h2 className="font-roboto font-bold text-base sm:text-xl lg:text-2xl mt-3 sm:mt-6">
            Event Information
          </h2>
          <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-slate-500">
            {event.information}
          </p>
        </div>
        <div className="shadow-xl shadow-gray-300 p-3 h-fit">
          <h2 className="font-roboto font-bold text-base sm:text-xl lg:text-2xl sm:mt-6">
            Event Detail
          </h2>
          <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-slate-500 flex gap-3 justify-start items-center">
            <CalendarDays /> {event.date}
          </p>
          <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-slate-500 flex gap-3 justify-start items-center">
            <MapPin /> {event.location}
          </p>
          <p className="text-justify text-sm mt-3 sm:text-base sm:mt-6 text-slate-500 flex gap-3 justify-start items-center">
            &nbsp;
            {event.price === 'Free' ? `${event.price}` : `£ ${event.price}`}
          </p>
          <hr className="my-4" />
          <div className="flex flex-row justify-between items-center mt-3 gap-1 lg:gap-4">
            <Button className="w-24 sm:w-32">Buy Now</Button>
            <Button className="w-auto">Add to Calendar</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventPage;
