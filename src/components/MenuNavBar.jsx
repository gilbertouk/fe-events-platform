import { Link } from 'react-router-dom';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';

import SearchIcon from './icons/SearchIcon';
import MenuIcon from './icons/MenuIcon';

const MenuNavBar = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">EVENTS</h1>
        <div className="flex items-center">
          <div className="relative mr-6 hidden md:block">
            <Input
              className="pl-10 pr-4 py-2 rounded-md text-black"
              placeholder="What are you looking for?"
              type="search"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <nav className="hidden md:flex flex-col md:flex-row gap-4 lg:gap-6 items-start md:items-center space-y-4 md:space-y-0">
            <Link className="hover:underline" href="#">
              Programação
            </Link>
            <Link className="hover:underline" href="#">
              Categorias
            </Link>
            <Link className="hover:underline" href="#">
              Login
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="ml-auto md:hidden"
                size="icon"
                variant="outline"
              >
                <MenuIcon className="h-6 w-6 text-black" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 items-start space-y-4">
                <Link className="hover:underline" href="#">
                  Programação
                </Link>
                <Link className="hover:underline" href="#">
                  Categorias
                </Link>
                <Link className="hover:underline" href="#">
                  Login
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default MenuNavBar;