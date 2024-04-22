// import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuthContext from "@/hooks/useAuthContext";
import { useEffect, useState } from "react";
import usePrivateAxios from "@/hooks/usePrivateAxios";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import moment from "moment";

const Profile = () => {
  const { currentUser } = useAuthContext();
  const userData = JSON.parse(localStorage.getItem("user"));
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const apiPrivate = usePrivateAxios();

  useEffect(() => {
    if (currentUser) {
      setIsLoading(true);
      apiPrivate
        .get(`/user/orders/${currentUser.email}`)
        .then((response) => {
          return setOrders(response.data.body);
        })
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [currentUser]);

  return (
    <div className="w-full min-h-screen max-w-3xl mx-auto px-4">
      {isLoading && <Loading />}
      {!isLoading && error && <Error />}
      {!isLoading && !error && (
        <>
          <div className="py-6 space-y-2 sm:flex sm:justify-start sm:gap-10 sm:items-center">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">{`${userData?.firstName} ${userData?.surname}`}</h1>
              <p className="text-sm leading-none text-gray-500">
                {userData?.email}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar className="w-24 h-24">
                <AvatarImage src={currentUser?.providerData[0]?.photoURL} />
                <AvatarFallback>{`${userData?.firstName[0]}${userData?.surname[0]}`}</AvatarFallback>
              </Avatar>

              {/* <Button size="sm" variant="outline">
                Upload new picture
              </Button> */}
            </div>
          </div>

          <div className="border-t border-gray-200" />
          <div className="py-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-lg font-bold">My Events</h2>
              <p className="text-sm leading-none text-gray-500">
                Manage your event tickets
              </p>
            </div>
            {orders.length === 0 && (
              <p className="text-sm leading-none text-gray-500">
                You have not purchased any tickets
              </p>
            )}
            <div className="space-y-4">
              {orders?.length > 0 &&
                orders.map((order) => {
                  return (
                    <Card key={order.id}>
                      <CardContent className="p-4 grid items-center gap-4 sm:gap-7 sm:flex-row">
                        <div className="text-center sm:text-left">
                          <h3 className="font-bold">{order?.event?.name}</h3>
                          <p className="text-sm leading-none text-gray-500">
                            ID: {order?.id}
                          </p>
                        </div>
                        <div className="flex sm:justify-between items-start space-x-4">
                          <div>
                            <h4 className="font-bold">Date</h4>
                            <time className="text-sm leading-none">
                              {moment
                                .utc(order?.event?.dateStart)
                                .format("DD MMM, YY - H:mm")}
                            </time>
                          </div>
                          <div>
                            <h4 className="font-bold">Quantity</h4>
                            <span>{order?.tickets}</span>
                          </div>
                          <div>
                            <h4 className="font-bold">Address</h4>
                            <span>
                              {`${order?.event?.address}, ${order?.event?.city}`}{" "}
                              <br />
                              {`${order?.event?.postcode}`}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-bold">Price</h4>
                            <span>
                              {event?.price === "Free"
                                ? `${order?.event?.price}`
                                : `£ ${order?.event?.price}`}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
