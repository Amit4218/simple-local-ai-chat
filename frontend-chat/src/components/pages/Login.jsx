import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "react-toastify";
import { userContext } from "../../context/userAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData = { email, password };
  const navigate = useNavigate();
  const { setUser } = useContext(userContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/vi/user/login",
        formData
      );
      setUser(res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/chat");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Card className="w-full max-w-md bg-zinc-900 text-white ">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              Login to your account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full bg-black cursor-pointer"
              onClick={handleSubmit}
            >
              Login
            </Button>
            <Button variant="secondary" className="w-full cursor-pointer ">
              Login with Google
            </Button>

            <Button variant="secondary" className="w-full cursor-pointer ">
              Login with Github
            </Button>
            <CardAction>
              <a href="/register">
                <Button className="text-white text-xs" variant="link">
                  Don't have an account ? Sign Up
                </Button>
              </a>
            </CardAction>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
