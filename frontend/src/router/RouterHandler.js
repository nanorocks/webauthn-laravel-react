import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../views/pages/Landing";
import Dashboard from "../views/pages/Dashboard";
import WebAuthnMiddleware from "../middleware/WebAuthnMiddleware";

export default function RouterHandler() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/dashboard"
        element={
          <WebAuthnMiddleware>
            <Dashboard />
          </WebAuthnMiddleware>
        }
      />
    </Routes>
  );
}
