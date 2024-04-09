import CarouselCategory from '@/components/CarouselCategory';
import EventCard from '@/components/EventCard';
import SeMore from '@/components/SeMore';
import SearchBar from '@/components/SearchBar';

const eventsExamples = [
  {
    id: 'f97233c2-4569-4e7e-a373-3a3e6d525b3f',
    name: 'London Fashion Week',
    date: 'September 14, 2024',
    location: 'London',
    category: 'Fashion',
    price: '60.90',
    description:
      'London Fashion Week is a bi-annual event showcasing the latest trends in fashion.',
  },
  {
    id: '0ec0855e-f868-4e67-ae6d-d70ff16dbb0a',
    name: 'Edinburgh Fringe Festival',
    date: 'August 2, 2024',
    location: 'Edinburgh',
    category: 'Arts & Culture',
    price: '26.90',
    description:
      "The Edinburgh Fringe Festival is the world's largest arts festival, featuring thousands of performances across various art forms.",
  },
  {
    id: 'd7d005e0-0670-4fa8-81fd-3a2a1a930379',
    name: 'Manchester International Festival',
    date: 'July 4, 2024',
    location: 'Manchester',
    category: 'Arts & Culture',
    price: '17.99',
    description:
      'The Manchester International Festival celebrates innovative and cutting-edge performances in arts and culture.',
  },
  {
    id: '3d4c107a-f0e6-4edf-96c4-214bc7c8a634',
    name: 'Birmingham Pride',
    date: 'May 25, 2024',
    location: 'Birmingham',
    category: 'LGBTQ+',
    price: 'Free',
    description:
      "Birmingham Pride is one of the UK's largest LGBTQ+ celebrations, promoting equality and diversity.",
  },
  {
    id: '9db84ac2-2de1-499d-baeb-5e31b6f0a0e2',
    name: 'Glasgow International Comedy Festival',
    date: 'March 14, 2024',
    location: 'Glasgow',
    category: 'Comedy',
    price: '58.99',
    description:
      'The Glasgow International Comedy Festival features top comedians from around the world, bringing laughter to the city.',
  },
  {
    id: '5905b70a-6e97-4d9e-8633-1d11ef31f3fc',
    name: 'Liverpool Sound City',
    date: 'May 3, 2024',
    location: 'Liverpool',
    category: 'Music',
    price: '27.90',
    description:
      'Liverpool Sound City is a music festival showcasing emerging and established artists in various venues across the city.',
  },
  {
    id: 'f914c7dd-1bf9-4a3b-80bc-cba9cd8b53af',
    name: 'Brighton Marathon',
    date: 'April 14, 2024',
    location: 'Brighton',
    category: 'Sports',
    price: '10.99',
    description:
      'The Brighton Marathon is a popular long-distance running event attracting participants from around the world.',
  },
  {
    id: 'ea2a636f-d6f1-47c8-bb25-cd16c1d6f2c8',
    name: 'Belfast International Arts Festival',
    date: 'October 11, 2024',
    location: 'Belfast',
    category: 'Arts & Culture',
    price: '72.90',
    description:
      'The Belfast International Arts Festival celebrates creativity and culture through a diverse program of performances and exhibitions.',
  },
  {
    id: '44f04016-bf2e-4a76-96f5-620bd5e1f932',
    name: 'Leeds Festival',
    date: 'August 23, 2024',
    location: 'Leeds',
    category: 'Music',
    price: '30.00',
    description:
      'Leeds Festival is a renowned music event featuring top bands and artists performing across multiple stages.',
  },
  {
    id: 'b5e27e90-47ec-4cc7-b69e-b221462e2a3e',
    name: 'Cardiff International Food and Drink Festival',
    date: 'July 5, 2024',
    location: 'Cardiff',
    category: 'Food & Drink',
    price: '18.00',
    description:
      'The Cardiff International Food and Drink Festival showcases culinary delights from local and international vendors.',
  },
  {
    id: 'fd9b6a22-52e4-47af-b7d8-989b7db8cc49',
    name: 'Oxford Literary Festival',
    date: 'March 30, 2024',
    location: 'Oxford',
    category: 'Literature',
    price: '9.90',
    description:
      'The Oxford Literary Festival celebrates literature with author talks, book signings, and literary events.',
  },
  {
    id: 'd631891b-8eb5-4820-80b4-37d5dce3a251',
    name: 'Cambridge Science Festival',
    date: 'March 11, 2024',
    location: 'Cambridge',
    category: 'Science',
    price: '150.90',
    description:
      'The Cambridge Science Festival explores the wonders of science through interactive exhibits, talks, and demonstrations.',
  },
  {
    id: '68e91d5e-8e1a-4902-8645-394f9e56d899',
    name: 'Newcastle International Film Festival',
    date: 'March 29, 2024',
    location: 'Newcastle upon Tyne',
    category: 'Film',
    price: '130.99',
    description:
      'The Newcastle International Film Festival showcases independent and international cinema, attracting filmmakers and cinephiles alike.',
  },
  {
    id: '1a6c9383-cf2c-40dc-9f44-b47aa80bdc87',
    name: 'York Chocolate Festival',
    date: 'April 12, 2024',
    location: 'York',
    category: 'Food & Drink',
    price: 'Free',
    description:
      'The York Chocolate Festival celebrates all things chocolate, featuring tastings, workshops, and chocolate-themed events.',
  },
  {
    id: '888c8fe5-3b6b-41d3-8cfd-963c024611fb',
    name: 'Bristol Balloon Fiesta',
    date: 'August 8, 2024',
    location: 'Bristol',
    category: 'Festival',
    price: 'Free',
    description:
      'The Bristol Balloon Fiesta is a spectacular event featuring hot air balloons, live music, and family entertainment.',
  },
  {
    id: 'f47391e1-f36d-4e32-88c0-0b1e49cb4390',
    name: 'Sheffield Doc/Fest',
    date: 'June 6, 2024',
    location: 'Sheffield',
    category: 'Documentary',
    price: '78.00',
    description:
      'Sheffield Doc/Fest is a documentary film festival showcasing non-fiction storytelling through film screenings and industry events.',
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
          {eventsExamples.map((event) => {
            return <EventCard key={event.id} event={event} />;
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
