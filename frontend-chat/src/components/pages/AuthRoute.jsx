import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Register from "./Register";

function AuthRoute() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default AuthRoute;
