import { Link, useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import auth from '../config/firebase';
import useAuthContext from '../hooks/useAuthContext';

import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import MenuIcon from './icons/MenuIcon';

const MenuNavBar = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useAuthContext();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    } finally {
      localStorage.removeItem('token');
      setCurrentUser(null);
      navigate('/');
    }
  };

  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to={'/'} className="hover:none" href="#">
            EVENTS PLATFORM
          </Link>
        </h1>
        <div className="flex items-center">
          <nav className="hidden md:flex flex-col md:flex-row gap-4 lg:gap-6 items-start md:items-center space-y-4 md:space-y-0">
            <Link className="hover:underline" to={'/'}>
              Home
            </Link>
            {!currentUser && (
              <Link to="/login" className="hover:underline" href="#">
                <Button>Login</Button>
              </Link>
            )}

            {currentUser && (
              <>
                <p>
                  Welcome:&nbsp;
                  <Link to="/profile" className="hover:underline sm:underline">
                    {currentUser?.displayName}
                  </Link>
                </p>
                |
                <Link className="hover:underline">
                  <Button onClick={handleLogout}>Logout</Button>
                </Link>
              </>
            )}
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
            <SheetContent className="">
              <nav className="flex flex-col gap-4 items-start space-y-4">
                <Link className="hover:underline" href="#">
                  Programação
                </Link>
                <Link className="hover:underline" href="#">
                  Categorias
                </Link>
                {!currentUser && (
                  <Link to="/login" className="hover:underline" href="#">
                    <Button>Login</Button>
                  </Link>
                )}

                {currentUser && (
                  <>
                    <p>Welcome: {currentUser?.displayName}</p>
                    <Link className="hover:underline">
                      <Button onClick={handleLogout}>Logout</Button>
                    </Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default MenuNavBar;
