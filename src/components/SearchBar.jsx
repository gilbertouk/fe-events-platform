import useCategoriesContext from "@/hooks/useCategoriesContext";
import useEventsCitiesContext from "@/hooks/useEventsCitiesContext";

import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import SearchIcon from "./icons/SearchIcon";
import MapLocation from "./icons/MapLocation";
import Category from "./icons/Category";

const SearchBar = ({
  handleSearch,
  eventName,
  setEventName,
  city,
  setCity,
  category,
  setCategory,
  setPage,
}) => {
  const { categories } = useCategoriesContext();
  const { eventsCities } = useEventsCitiesContext();

  return (
    <div className="bg-white rounded w-fit sm:w-[80%] md:w-[60%] lg:w-auto p-4 m-auto">
      <div className="flex flex-col gap-2 lg:gap-1 lg:flex-row bg-white">
        <div className="flex justify-center items-center">
          <SearchIcon className="text-gray-500" />
          <Input
            className="rounded-none w-full md:w-[60%] lg:w-[180px] border-transparent focus:outline-none focus:border-transparent focus:ring-0 focus-visible:ring-0 placeholder:text-gray-500 text-gray-500"
            placeholder="Search Events"
            type="search"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="min-h-[16px] hidden border lg:block lg:mx-2"></div>
        <div className="flex justify-center items-center">
          <MapLocation className="text-gray-500" />
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="rounded-none w-full md:w-[60%] lg:w-[180px] border-transparent focus:outline-none focus:border-transparent focus:ring-0 focus-visible:ring-0 text-gray-500">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="mt-1">
              {eventsCities.map((item) => {
                return (
                  <SelectItem key={item.city} value={item.city}>
                    {item.city}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="min-h-[16px] hidden border lg:block lg:mx-2"></div>
        <div className="flex justify-center items-center">
          <Category className="text-gray-500" />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="rounded-none w-full md:w-[60%] lg:w-[180px] border-transparent focus:outline-none focus:border-transparent focus:ring-0 focus-visible:ring-0 text-gray-500">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="mt-1">
              {categories.map((category) => {
                return (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <Button
            className="w-[180px] md:w-[150px] xl:w-[180px]"
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </Button>
          <Button
            className="w-[180px] md:w-[150px] xl:w-[180px]"
            variant="destructive"
            onClick={() => {
              setEventName("");
              setCity("");
              setCategory("");
              setPage(1);
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
