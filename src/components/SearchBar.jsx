import { Input } from '@/components/ui/input';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import SearchIcon from './icons/SearchIcon';
import MapLocation from './icons/MapLocation';
import Category from './icons/Category';

const SearchBar = () => {
  return (
    <div className="bg-white rounded w-fit sm:w-[80%] md:w-[60%] lg:w-auto p-4 m-auto">
      <form className="flex flex-col gap-2 lg:gap-1 lg:flex-row bg-white">
        <div className="flex justify-center items-center">
          <SearchIcon className="text-slate-500" />
          <Input
            className="rounded-none w-full md:w-[60%] lg:w-[180px] border-transparent focus:outline-none focus:border-transparent focus:ring-0 focus-visible:ring-0 placeholder:text-slate-500"
            placeholder="Search Events"
            type="search"
          />
        </div>
        <div className="min-h-[16px] hidden border lg:block lg:mx-2"></div>
        <div className="flex justify-center items-center">
          <MapLocation className="text-slate-500" />
          <Select>
            <SelectTrigger className="rounded-none w-full md:w-[60%] lg:w-[180px] border-transparent focus:outline-none focus:border-transparent focus:ring-0 focus-visible:ring-0 text-slate-500">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="mt-1">
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="ny">New York</SelectItem>
              <SelectItem value="sf">San Francisco</SelectItem>
              <SelectItem value="la">Los Angeles</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="min-h-[16px] hidden border lg:block lg:mx-2"></div>
        <div className="flex justify-center items-center">
          <Category className="text-slate-500" />
          <Select>
            <SelectTrigger className="rounded-none w-full md:w-[60%] lg:w-[180px] border-transparent focus:outline-none focus:border-transparent focus:ring-0 focus-visible:ring-0 text-slate-500">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="mt-1">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="food">Food & Drink</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-center items-center">
          <Button className="w-[180px]" type="submit">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
