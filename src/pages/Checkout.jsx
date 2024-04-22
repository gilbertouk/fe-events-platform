import CanceledCheckout from "@/components/CanceledCheckout";
import Error from "@/components/Error";
import SuccessCheckout from "@/components/SuccessCheckout";
import { useSearchParams } from "react-router-dom";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");
  const orderData = JSON.parse(localStorage.getItem("order"));

  return (
    <main className="min-h-screen bg-gray-100">
      {success === "true" && orderData && <SuccessCheckout />}
      {canceled === "true" && <CanceledCheckout />}
      {!orderData && success !== "true" && !canceled && <Error />}
      {!orderData && !success && canceled !== "true" && <Error />}
    </main>
  );
};

export default Checkout;
