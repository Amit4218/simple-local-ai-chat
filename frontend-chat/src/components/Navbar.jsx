import logoImage from "/image/logo.png";
import { IoLogoGithub } from "react-icons/io";
import { Button } from "@/components/ui/button";

function Navbar() {
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
                <Button variant="ghost">Home</Button>
              </a>
              <a href="/chat">
                <Button variant="ghost">Chat</Button>
              </a>
              <a href="/about">
                <Button variant="ghost">About</Button>
              </a>
            </div>
            <div className="flex gap-4">
              <IoLogoGithub className="-mb-2 size-[2em]" />
              <div className="text-black -mt-1">
                <a href="/login">
                  <Button variant="outline" className="cursor-pointer">
                    Login
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
