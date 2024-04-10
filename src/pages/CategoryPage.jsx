import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { eventsExamples } from '@/mockData/events';
import EventCard from '@/components/EventCard';
import SeMore from '@/components/SeMore';

const CategoryPage = () => {
  const [searchParams] = useSearchParams();
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(true);
  const categoryName = searchParams.get('category_name');

  useEffect(() => {
    if (categoryName) {
      setLoading(true);
      const eventsArray = eventsExamples.filter(
        (e) => e.category === categoryName,
      );
      setEvents(eventsArray);
      setLoading(false);
    }
  }, [categoryName]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 bg-gray-100 rounded-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <main>
      <section className="bg-gray-100">
        <div className="max-w-screen-xl w-auto mx-auto p-4">
          <h2 className="font-roboto font-bold text-xl sm:text-4xl lg:text-7xl text-center mb-8 text-black">
            Upcoming Event
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {events.map((event) => {
              return <EventCard key={event.id} event={event} />;
            })}
          </div>
          <SeMore />
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
