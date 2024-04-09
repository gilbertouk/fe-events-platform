import { Button } from '@/components/ui/button';
import ArrowRight from './icons/ArrowRight';

const SeMore = () => {
  return (
    <div className="flex justify-end">
      <Button className="text-right">
        Se More Events &nbsp;
        <ArrowRight />
      </Button>
    </div>
  );
};

export default SeMore;
