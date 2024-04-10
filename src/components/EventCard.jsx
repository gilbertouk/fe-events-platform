import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CalendarDays from '@/components/icons/CalendarDays';
import MapPin from '@/components/icons/MapPin';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleSelectedEvent = (e) => {
    e.preventDefault();
    navigate(`/event/${event.id}`);
  };

  return (
    <Card className="w-[380px] h-auto shadow-xl shadow-gray-300">
      <CardHeader className="p-0 object-cover">
        <img alt="Event image" src="/event.png" className="rounded-t" />
      </CardHeader>
      <CardContent className="px-3 pt-3 md:px-7 md:pt-7 min-h-60">
        <CardTitle className="font-roboto font-bold text-sm sm:text-lg lg:text-xl text-start mb-4">
          {event.name}
        </CardTitle>
        <CardDescription className="flex gap-3 text-xs sm:text-sm justify-start items-center mb-4">
          <CalendarDays />
          {event.category}
        </CardDescription>
        <CardDescription className="flex gap-3 text-xs sm:text-sm justify-start items-center mb-4">
          <CalendarDays />
          {event.date}
        </CardDescription>
        <CardDescription className="flex gap-3 text-xs sm:text-sm justify-start items-center">
          <MapPin /> {event.location}
        </CardDescription>
      </CardContent>
      <CardFooter className="px-3 pb-2 md:px-7 md:pb-4 flex justify-between items-end">
        <p className="text-sm sm:text-base">
          {event.price === 'Free' ? `${event.price}` : `£ ${event.price}`}
        </p>
        <Button className="w-24 sm:w-32" onClick={handleSelectedEvent}>
          See More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
