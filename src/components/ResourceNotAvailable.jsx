import { AlertCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ResourceNotAvailable = ({ title, text, showLink }) => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center gap-6 p-10">
      <div className="text-center space-y-2">
        <AlertCircleIcon className="mx-auto h-12 w-12 text-red-500" />
        <h2 className="font-roboto text-2xl font-bold">{title}</h2>
        <p className="max-w-[600px] text-gray-500 text-center text-sm sm:text-base">
          {text}
        </p>
      </div>
      {showLink && (
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            to={"/"}
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          >
            Return to the homepage
          </Link>
        </div>
      )}
    </div>
  );
};

export default ResourceNotAvailable;
