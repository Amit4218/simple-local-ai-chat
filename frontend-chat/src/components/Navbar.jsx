import logoImage from "/image/logo.png";
import { IoLogoGithub } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { userContext } from "../context/userAuth";
import { useContext } from "react";
import AvatarIcon from "./AvatarIcon";

function Navbar() {
  const { user } = useContext(userContext);
  console.log(user);

  return (
    <>
      <div className="h-17 border rounded-md border-zinc-800 ">
        <nav className="p-4">
          <div className="flex flex-row row-3 justify-between">
            <div className="-mt-2">
              <a href="/">
                <img src={logoImage} alt="Logo" className="w-15" />
              </a>
            </div>
            <div className="flex gap-10 text-[1.2em]">
              <a href="/">
                <Button className="font-bold" variant="ghost">
                  Home
                </Button>
              </a>
              <a href="/chat">
                <Button className="font-bold" variant="ghost">
                  Chat
                </Button>
              </a>
              <a href="/about">
                <Button className="font-bold" variant="ghost">
                  About
                </Button>
              </a>
            </div>
            <div className="flex gap-5">
              <a
                href="https://github.com/Amit4218/simple-local-ai-chat"
                target="_blank"
              >
                <IoLogoGithub className="mt-1 size-[2.3em]" />
              </a>
              {user == null ? (
                <div className="text-black -mt-1">
                  <a href="/auth/login">
                    <Button variant="outline" className="cursor-pointer ">
                      Login
                    </Button>
                  </a>
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
