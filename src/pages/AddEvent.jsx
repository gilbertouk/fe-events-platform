import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "@/services/api";

import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/Pagination";
import Error from "@/components/Error";
import EventForm from "@/components/EventForm";
import EventTable from "@/components/EventTable";
import Loading from "@/components/Loading";

const AddEvent = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalEvents, setTotalEvents] = useState(0);
  const [isAddEvent, setIsAddEvent] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/event/all?page=${page}&limit=5`)
      .then((response) => {
        setEvents(response.data.body.events);
        setTotalEvents(response.data.body._count);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setFirstLoad(false);
        setIsLoading(false);
      });
  }, [page]);

  const handleViewEvent = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <main className="w-full min-h-screen max-w-4xl mx-auto py-8">
      {firstLoad && !error && <Loading />}
      {!isLoading && error && <Error />}
      {!error && (
        <>
          <div className="pb-4">
            <Button
              onClick={() => {
                setIsAddEvent(!isAddEvent);
              }}
            >
              {isAddEvent ? "Cancel" : "Add New Event"}
            </Button>
          </div>

          {isAddEvent && (
            <EventForm setIsAddEvent={setIsAddEvent} setPage={setPage} />
          )}
          {!isAddEvent && (
            <>
              <h2 className="pb-1 text-center text-xl font-roboto">
                All active events
              </h2>
              <div className="border rounded-lg overflow-hidden">
                <EventTable events={events} handleViewEvent={handleViewEvent} />
              </div>
              <div className={"flex justify-center mt-6"}>
                <Pagination
                  totalPages={Math.ceil(totalEvents / 5)}
                  totalPagesToDisplay={5}
                  currentPage={page}
                  setCurrentPage={setPage}
                  isLoading={isLoading}
                />
              </div>
            </>
          )}
        </>
      )}
    </main>
  );
};

export default AddEvent;
