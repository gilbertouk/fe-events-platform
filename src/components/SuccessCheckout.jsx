import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { CheckCircleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessCheckout = () => {
  const navigate = useNavigate();
  const orderData = JSON.parse(localStorage.getItem("order"));
  return (
    <div className="bg-gray-100 p-8 sm:p-14 min-h-screen">
      <div className="flex flex-col gap-4 items-center justify-center space-y-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <CheckCircleIcon className="h-24 w-24 fill-accent" />
          <div className="text-lg font-bold">Thank you for your purchase!</div>
          <div className="text-sm text-gray-500">
            Your order has been confirmed and will be processed soon.
          </div>
        </div>
        <Card className="w-full max-w-sm p-0">
          <CardContent className="p-4">
            <div className="grid gap-1 text-sm">
              <div className="font-medium">Order number</div>
              <div className="text-gray-500">{orderData?.id}</div>
            </div>
            <hr className="my-4" />
            <div className="grid gap-1 text-sm">
              <div className="font-medium">Qtd Tickets</div>
              <div>{orderData?.quantity}</div>
            </div>
            <hr className="my-4" />
            <div className="grid gap-1 text-sm">
              <div className="font-medium">Total</div>
              <div>
                {orderData?.price === "Free"
                  ? "Free"
                  : `£${
                      Number(orderData?.quantity) * Number(orderData?.price)
                    }`}
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex space-x-7">
          <div>
            <Button onClick={() => navigate("/")}>Continue shopping</Button>
          </div>
          <div>
            <Button onClick={() => navigate("/profile")}>View Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCheckout;
