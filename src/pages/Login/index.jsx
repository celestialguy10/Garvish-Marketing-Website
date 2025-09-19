import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import "./login.css";
import { Helmet } from "react-helmet";

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState("");
  const [password, setPasssword] = useState("");

  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3000/protected", {
          withCredentials: true,
        });
        if (response.data.isAuthenticated) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleClick = async () => {
    if (userId !== "" && password !== "") {
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          { userId, password },
          { withCredentials: true }
        );
        if (response.status === 200) {
          toast({ description: "User logged in." });
          console.log(response.data);
          setIsAuthenticated(true); // Set authentication status
        }
      } catch (error) {
        toast({
          description: "Invalid credentials.",
          variant: "destructive",
        });
        console.log(error.response.data.message);
      }
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/logout",
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        toast({ description: "User logged out." });
        setIsAuthenticated(false);
      }
    } catch (error) {
      toast({
        description: "Error logging out.",
        variant: "destructive",
      });
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="flex h-screen w-screen items-center justify-center flex-col">
        <h1 className="text-4xl text-center">You are already logged in</h1>
        <Button className="m-10">
          <Link to="/dashboard">Dashboard</Link>
        </Button>
        <Button onClick={handleLogout}>Log out</Button>
      </div>
    );
  }

  return (
    <div className="relative h-screen flex justify-center items-center animated-gradient-background">
      <Helmet>
        <link rel="canonical" href="https://garvishmarketing.com/login" />
      </Helmet>
      <div className="mesh-overlay"></div>
      <div className="absolute top-0 left-0">
        <button
          className="text-black focus:outline-none ml-5 transition-all duration-300 absolute top-7"
          onClick={() => {
            if (!isAuthenticated) {
              navigate("/");
            }
          }}
        >
          <svg
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <Card className="relative w-[300px] md:w-[350px] shadow-md transition-all duration-300 z-20 opacity-100">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login with your credentials!</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="z-20">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-md md:text-lg text-gray-700"
                  >
                    User ID:
                  </Label>
                  <Input
                    id="name"
                    placeholder=""
                    className="focus-visible:outline-none focus:border-0
                    focus-visible:ring-2 focus-visible:ring-slate-300 ring-[1px] ring-gray-300"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="password"
                    className="text-md md:text-lg text-gray-700"
                  >
                    Password:
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    className="focus-visible:outline-none focus:border-0
                  focus-visible:ring-2 focus-visible:ring-slate-300 ring-[1px] ring-gray-300"
                    value={password}
                    onChange={(event) => setPasssword(event.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="w-full z-10" onClick={handleClick}>
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
