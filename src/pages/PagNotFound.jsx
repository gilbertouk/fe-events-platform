import { Link } from "react-router-dom";

import { ChevronRightIcon } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen py-12 space-y-4 md:space-y-10 bg-gray-100">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="font-roboto text-center text-lg sm:text-2xl lg:text-4xl">
          Page Not Found
        </h1>
        <p className="max-w-[600px] text-gray-500 text-center text-sm sm:text-base">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          to={"/"}
        >
          Return to the homepage
          <ChevronRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
