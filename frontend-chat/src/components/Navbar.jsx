import logoImage from "/image/logo.png";
import { IoLogoGithub } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { userContext } from "../context/userAuth";
import { useContext } from "react";
import AvatarIcon from "./AvatarIcon";
import { Link } from "react-router-dom";

function Navbar() {
  const { user } = useContext(userContext);

  return (
    <>
      <div className="h-17 border rounded-md border-zinc-800 ">
        <nav className="p-4">
          <div className="flex flex-row row-3 justify-between">
            <div className="-mt-2">
              <Link to={"/"}>
                <img src={logoImage} alt="Logo" className="w-15" />
              </Link>
            </div>
            <div className="flex gap-10 text-[1.2em]">
              <Link to={"/"}>
                <Button className="font-bold" variant="ghost">
                  Home
                </Button>
              </Link>

              <Link to={"/chat"}>
                <Button className="font-bold" variant="ghost">
                  Chat
                </Button>
              </Link>
              <Link to={"/about"}>
                <Button className="font-bold" variant="ghost">
                  About
                </Button>
              </Link>
            </div>
            <div className="flex gap-5">
              <Link
                to="https://github.com/Amit4218/simple-local-ai-chat"
                target="_blank"
              >
                <IoLogoGithub className="mt-1 size-[2.3em]" />
              </Link>
              {user == null ? (
                <div className="text-black -mt-1">
                  <Link to={"/auth/login"}>
                    <Button
                      variant=""
                      className="bg-zinc-900 hover:bg-amber-50 hover:text-black font-bold  cursor-pointer mt-2"
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              ) : (
                <AvatarIcon />
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
