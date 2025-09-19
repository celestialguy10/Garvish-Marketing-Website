import { useToast } from "@/components/ui/use-toast";
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/logout",
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        toast({ description: "User logged out." });
        navigate("/login");
      }
    } catch (error) {
      toast({
        description: "Error logging out.",
        variant: "destructive",
      });
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <div className="absolute bg-gray-200 shadow-lg w-60 h-screen flex flex-col justify-between p-5 gap-4">
        <div className="text-3xl text-black font-md ">Dashboard</div>
        <div className="flex flex-col items-start mb-40">
          <Button variant="link">
            <Link className="text-left" to="/dashboard/task-manager">
              Task Manager
            </Link>
          </Button>
          <Button variant="link">
            <Link>Extra</Link>
          </Button>
          <Button variant="link">
            <Link></Link>
          </Button>
          <Button variant="link">
            <Link></Link>
          </Button>
        </div>
        <Button onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  );
};

export default Dashboard;
