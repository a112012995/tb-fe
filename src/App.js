import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, BeforeLogin, Details, Dashboard } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/BeforeLogin" element={<BeforeLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
