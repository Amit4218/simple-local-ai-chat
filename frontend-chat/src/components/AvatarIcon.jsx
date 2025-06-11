import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { userContext } from "../context/userAuth";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AvatarIcon() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logout Successfull");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-[2.4rem]" >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Button onClick={logout} variant="destructive" className="cursor-pointer">
        Logout
      </Button>
    </div>
  );
}

export default AvatarIcon;
