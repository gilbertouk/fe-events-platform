import CarouselCategory from '@/components/CarouselCategory';
import EventCard from '@/components/EventCard';
import SeMore from '@/components/SeMore';
import SearchBar from '@/components/SearchBar';

const eventsExamples = [
  {
    name: 'London Fashion Week',
    date: 'September 14, 2024',
    location: 'London',
    category: 'Fashion',
    price: '60.90',
  },
  {
    name: 'Edinburgh Fringe Festival',
    date: 'August 2, 2024',
    location: 'Edinburgh',
    category: 'Arts & Culture',
    price: '26.90',
  },
  {
    name: 'Manchester International Festival',
    date: 'July 4, 2024',
    location: 'Manchester',
    category: 'Arts & Culture',
    price: '17.99',
  },
  {
    name: 'Birmingham Pride',
    date: 'May 25, 2024',
    location: 'Birmingham',
    category: 'LGBTQ+',
    price: 'Free',
  },
  {
    name: 'Glasgow International Comedy Festival',
    date: 'March 14, 2024',
    location: 'Glasgow',
    category: 'Comedy',
    price: '58.99',
  },
  {
    name: 'Liverpool Sound City',
    date: 'May 3, 2024',
    location: 'Liverpool',
    category: 'Music',
    price: '27.90',
  },
  {
    name: 'Brighton Marathon',
    date: 'April 14, 2024',
    location: 'Brighton',
    category: 'Sports',
    price: '10.99',
  },
  {
    name: 'Belfast International Arts Festival',
    date: 'October 11, 2024',
    location: 'Belfast',
    category: 'Arts & Culture',
    price: '72.90',
  },
  {
    name: 'Leeds Festival',
    date: 'August 23, 2024',
    location: 'Leeds',
    category: 'Music',
    price: '30.00',
  },
  {
    name: 'Cardiff International Food and Drink Festival',
    date: 'July 5, 2024',
    location: 'Cardiff',
    category: 'Food & Drink',
    price: '18.00',
  },
  {
    name: 'Oxford Literary Festival',
    date: 'March 30, 2024',
    location: 'Oxford',
    category: 'Literature',
    price: '9.90',
  },
  {
    name: 'Cambridge Science Festival',
    date: 'March 11, 2024',
    location: 'Cambridge',
    category: 'Science',
    price: '150.90',
  },
  {
    name: 'Newcastle International Film Festival',
    date: 'March 29, 2024',
    location: 'Newcastle upon Tyne',
    category: 'Film',
    price: '130.99',
  },
  {
    name: 'York Chocolate Festival',
    date: 'April 12, 2024',
    location: 'York',
    category: 'Food & Drink',
    price: 'Free',
  },
  {
    name: 'Bristol Balloon Fiesta',
    date: 'August 8, 2024',
    location: 'Bristol',
    category: 'Festival',
    price: 'Free',
  },
  {
    name: 'Sheffield Doc/Fest',
    date: 'June 6, 2024',
    location: 'Sheffield',
    category: 'Documentary',
    price: '78.00',
  },
];

const trendingEventsExamples = [
  {
    name: 'London Fashion Week',
    date: 'September 14, 2024',
    location: 'London',
    category: 'Fashion',
    price: '60.90',
  },
  {
    name: 'Edinburgh Fringe Festival',
    date: 'August 2, 2024',
    location: 'Edinburgh',
    category: 'Arts & Culture',
    price: '26.90',
  },
  {
    name: 'Manchester International Festival',
    date: 'July 4, 2024',
    location: 'Manchester',
    category: 'Arts & Culture',
    price: '17.99',
  },
  {
    name: 'Birmingham Pride',
    date: 'May 25, 2024',
    location: 'Birmingham',
    category: 'LGBTQ+',
    price: 'Free',
  },
  {
    name: 'Glasgow International Comedy Festival',
    date: 'March 14, 2024',
    location: 'Glasgow',
    category: 'Comedy',
    price: '58.99',
  },
  {
    name: 'Liverpool Sound City',
    date: 'May 3, 2024',
    location: 'Liverpool',
    category: 'Music',
    price: '27.90',
  },
];

const categoriesExamples = [
  { name: 'Fashion', icon: 'Shirt' },
  { name: 'Arts & Culture', icon: 'PenTool' },
  { name: 'LGBTQ+', icon: 'Rainbow' },
  { name: 'Comedy', icon: 'Laugh' },
  { name: 'Music', icon: 'Music' },
  { name: 'Sports', icon: 'Medal' },
  { name: 'Food & Drink', icon: 'UtensilsCrossed' },
  { name: 'Literature', icon: 'BookOpen' },
  { name: 'Science', icon: 'Atom' },
  { name: 'Film', icon: 'Clapperboard' },
  { name: 'Festival', icon: 'PartyPopper' },
  { name: 'Documentary', icon: 'FileVideo2' },
];

const Home = () => {
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
      <section className="max-w-screen-xl w-auto mx-auto mt-4 p-4">
        <h2 className="font-roboto font-bold text-xl sm:text-4xl lg:text-7xl text-center mb-8 text-black">
          Upcoming Event
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {eventsExamples.map((event, i) => {
            return <EventCard key={i} event={event} />;
          })}
        </div>
        <SeMore />
      </section>
      <section className="w-auto mx-auto mt-4 p-4 bg-black">
        <h2 className="font-roboto font-bold text-xl sm:text-4xl lg:text-7xl text-center mb-8 text-white">
          Browser By Category
        </h2>
        <div>
          <CarouselCategory categories={categoriesExamples} />
        </div>
      </section>
      <section className="max-w-screen-xl w-auto mx-auto mt-4 p-4">
        <h2 className="font-roboto font-bold text-xl sm:text-4xl lg:text-7xl text-center mb-8 text-black">
          Trending Events
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {trendingEventsExamples.map((event, i) => {
            return <EventCard key={i} event={event} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
