import { AlertTriangleIcon } from "lucide-react";

const Error = () => {
  return (
    <div className="flex items-center justify-center pt-12">
      <div className="space-y-4 text-center">
        <AlertTriangleIcon className="mx-auto h-10 w-10 text-red-500" />
        <h2 className="font-roboto text-2xl font-bold">
          Oops, something went wrong!
        </h2>
        <p className="text-gray-500">
          We&apos;re sorry, but an unexpected error has occurred. Please try
          again later.
        </p>
      </div>
    </div>
  );
};

export default Error;
