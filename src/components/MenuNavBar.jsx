import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import auth from "../config/firebase";
import useAuthContext from "../hooks/useAuthContext";

import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import MenuIcon from "./icons/MenuIcon";

const MenuNavBar = () => {
  const [userLogged, setUserLogged] = useState(null);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useAuthContext();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (currentUser && user) {
      const userData = JSON.parse(user);
      setUserLogged(userData);
    }
  }, [currentUser, user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    } finally {
      localStorage.clear();
      setCurrentUser(null);
      setUserLogged(null);
      navigate("/");
    }
  };

  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to={"/"} className="hover:none">
            {import.meta.env.VITE_COMPANY_NAME}
          </Link>
        </h1>
        <div className="flex items-center">
          <nav className="hidden md:flex flex-col md:flex-row gap-4 lg:gap-6 items-start md:items-center space-y-4 md:space-y-0">
            <Link className="hover:underline" to={"/"}>
              Home
            </Link>
            {!currentUser && (
              <Link to="/login">
                <Button className="hover:underline">Login</Button>
              </Link>
            )}

            {currentUser && userLogged?.role === "ADMIN" && (
              <Link to="/event/add">
                <Button className="bg-black hover:bg-black hover:underline border-2 border-gray-100">
                  Add Event
                </Button>
              </Link>
            )}

            {currentUser && userLogged && (
              <>
                <p>
                  Welcome:&nbsp;
                  <Link to="/profile" className="hover:underline sm:underline">
                    {userLogged.firstName + " " + userLogged.surname}
                  </Link>
                </p>
                |
                <Link>
                  <Button className="hover:underline" onClick={handleLogout}>
                    Logout
                  </Button>
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
            <SheetContent className="bg-gray-300 border-0">
              <nav className="flex flex-col gap-4 items-start space-y-4">
                <SheetClose asChild>
                  <Link className="underline" to={"/"}>
                    Home
                  </Link>
                </SheetClose>
                {!currentUser && (
                  <SheetClose asChild>
                    <Link to="/login">
                      <Button>Login</Button>
                    </Link>
                  </SheetClose>
                )}

                {currentUser && userLogged?.role === "ADMIN" && (
                  <SheetClose asChild>
                    <Link className="underline" to="/event/add">
                      Add Event
                    </Link>
                  </SheetClose>
                )}

                {currentUser && userLogged && (
                  <>
                    <SheetClose asChild>
                      <Link to={"/profile"} className="underline">
                        Profile
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link>
                        <Button onClick={handleLogout}>Logout</Button>
                      </Link>
                    </SheetClose>
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
