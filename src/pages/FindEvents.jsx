import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { api } from "../services/api";

import EventCard from "@/components/EventCard";
import Loading from "@/components/Loading";
import SeeMore from "@/components/SeeMore";
import Error from "@/components/Error";

const FindEventsPage = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [totalEvents, setTotalEvents] = useState(0);
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState([]);
  const filter = searchParams.get("filter");
  const value = searchParams.get("value");

  useEffect(() => {
    if (filter && value) {
      setIsLoading(true);
      api
        .get(`/events?page=1&limit=9&${filter}=${value}`)
        .then((response) => {
          setEvents(response.data.body.events);
          setTotalEvents(response.data.body._count);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [filter, value]);

  const handleSeeMore = (e) => {
    e.preventDefault();
    api
      .get(`/events?page=${page + 1}&limit=9&${filter}=${value}`)
      .then((response) => {
        setEvents((previousEvents) => [
          ...previousEvents,
          ...response.data.body.events,
        ]);
        setTotalEvents(response.data.body._count);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setPage(page + 1);
        setIsLoadingMore(false);
      });
  };

  return (
    <main className="min-h-screen">
      {isLoading && <Loading />}
      {error && <Error />}
      {!isLoading && !error && (
        <section className="bg-gray-100 p-5">
          <div className="max-w-screen-xl w-auto mx-auto p-4">
            <h2 className="font-roboto font-bold text-xl sm:text-4xl lg:text-7xl text-center mb-8 text-black">
              {`Upcoming ${value} Events`}
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {events.map((event) => {
                return <EventCard key={event.id} event={event} />;
              })}
            </div>
            {events.length < totalEvents && (
              <SeeMore
                handleSeeMore={handleSeeMore}
                isLoadingMore={isLoadingMore}
                setIsLoadingMore={setIsLoadingMore}
              />
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export default FindEventsPage;
