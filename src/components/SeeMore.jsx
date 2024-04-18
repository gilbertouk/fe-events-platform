import { Button } from "@/components/ui/button";
import ArrowRight from "./icons/ArrowRight";
import { Loader2Icon } from "lucide-react";

const SeeMore = ({ handleSeeMore, isLoadingMore, setIsLoadingMore }) => {
  return (
    <div className="flex justify-center py-4">
      <Button
        className="text-right"
        onClick={(e) => {
          setIsLoadingMore(true);
          handleSeeMore(e);
        }}
        disabled={isLoadingMore}
      >
        {isLoadingMore ? (
          <>
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          <>
            Se More Events &nbsp;
            <ArrowRight />
          </>
        )}
      </Button>
    </div>
  );
};

export default SeeMore;
