import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import HomePage from "../../pages/Home";

export default function ProtectedRoute() {
    const [auth, setAuth] = useAuth();

  
    return auth.user ?  <HomePage />:<Outlet />;
  }