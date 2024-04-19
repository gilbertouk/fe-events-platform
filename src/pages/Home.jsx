import { useEffect, useState } from "react";

import { api } from "../services/api";

import CarouselCategory from "@/components/CarouselCategory";
import EventCard from "@/components/EventCard";
import SeeMore from "@/components/SeeMore";
import SearchBar from "@/components/SearchBar";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const HomePage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [events, setEvents] = useState([]);
  const [trendingEvents, setTrendingEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [page, setPage] = useState(1);
  const [eventName, setEventName] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (eventName === "" && city === "" && category === "") {
      setIsLoading(true);
      api
        .get(
          `/events?page=1&limit=9&name=${eventName}&city=${city}&category=${category}`,
        )
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
  }, [eventName, city, category]);

  useEffect(() => {
    setIsLoading(true);
    api
      .get("/events/trending")
      .then((response) => {
        setTrendingEvents(response.data.body);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSeeMore = (e) => {
    e.preventDefault();
    api
      .get(
        `/events?page=${
          page + 1
        }&limit=9&name=${eventName}&city=${city}&category=${category}`,
      )
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

  const handleSearch = () => {
    setIsLoading(true);
    api
      .get(
        `/events?page=${page}&limit=9&name=${eventName}&city=${city}&category=${category}`,
      )
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
  };

  return (
    <main className="min-h-screen">
      <section
        className="min-h-80"
        style={{
          background:
            "linear-gradient(to bottom, #000000, #1b1919, #2f2c2a, #43413d, #555751)",
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
          <SearchBar
            handleSearch={handleSearch}
            eventName={eventName}
            setEventName={setEventName}
            city={city}
            setCity={setCity}
            category={category}
            setCategory={setCategory}
            setPage={setPage}
          />
        </div>
      </section>
      {isLoading && <Loading />}
      {error && <Error />}
      {!isLoading && !error && (
        <>
          <section className="bg-gray-100 p-8">
            <div className="max-w-screen-xl w-auto mx-auto">
              <h2 className="font-roboto font-bold text-xl sm:text-4xl lg:text-7xl text-center mb-8 text-black">
                Upcoming Event
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
                {trendingEvents.map((event) => {
                  return <EventCard key={event.id} event={event} />;
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default HomePage;
