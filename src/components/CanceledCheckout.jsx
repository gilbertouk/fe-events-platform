import { XCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const CanceledCheckout = () => {
  const navigate = useNavigate();
  localStorage.removeItem("order");

  return (
    <div className="bg-gray-100 p-12 sm:p-16 min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <XCircleIcon className="text-6xl" />
          <div className="text-3xl font-bold tracking-tighter">
            Purchase Canceled
          </div>
          <p className="text-center max-w-[600px] text-gray-500 md:text-xl/relaxed">
            Your purchase has been canceled. If you believe this is an error,
            please contact support.
          </p>
        </div>
        <div>
          <Button onClick={() => navigate("/")}>Return to homepage</Button>
        </div>
      </div>
    </div>
  );
};

export default CanceledCheckout;
