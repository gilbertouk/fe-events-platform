import CarouselCategory from '@/components/CarouselCategory';
import EventCard from '@/components/EventCard';
import SeMore from '@/components/SeMore';
import SearchBar from '@/components/SearchBar';

import { eventsExamples, trendingEventsExamples } from '@/mockData/events';

const HomePage = () => {
  return (
    <main>
      <section
        className="min-h-80"
        style={{
          background:
            'linear-gradient(to bottom, #000000, #1b1919, #2f2c2a, #43413d, #555751)',
        }}
      >
        <div className="flex flex-col gap-2 lg:gap-8 py-5 text-white font-reddit font-bold tracking-widest m-auto">
          <div className="m-auto p-3">
            <h1 className="font-roboto my-2 text-xl sm:text-4xl lg:text-7xl sm:my-1 lg:my-2">
              Find Your Events
            </h1>
            <p className="text-xs sm:text-xl lg:text-2xl">
              Discover Amazing Upcoming Events
            </p>
          </div>
          <SearchBar />
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="max-w-screen-xl w-auto mx-auto p-4">
          <h2 className="font-roboto font-bold text-xl sm:text-4xl lg:text-7xl text-center mb-8 text-black">
            Upcoming Event
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {eventsExamples.map((event) => {
              return <EventCard key={event.id} event={event} />;
            })}
          </div>
          <SeMore />
        </div>
      </section>
      <section className="w-auto mx-auto p-4 bg-black">
        <h2 className="font-roboto font-bold text-xl sm:text-4xl lg:text-7xl text-center mb-8 text-white">
          Browser By Category
        </h2>
        <div>
          <CarouselCategory />
        </div>
      </section>
      <section className="bg-gray-100 pb-6">
        <div className="max-w-screen-xl w-auto mx-auto p-4">
          <h2 className="font-roboto font-bold text-xl sm:text-4xl lg:text-7xl text-center mb-8 text-black">
            Trending Events
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {trendingEventsExamples.map((event, i) => {
              return <EventCard key={i} event={event} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
