import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const Logout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <div>
      <Helmet>
        <link rel="canonical" href="https://garvishmarketing.com/logout" />
      </Helmet>
      <h1>You are already logged in</h1>
      <Button>Log out</Button>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Logout;
