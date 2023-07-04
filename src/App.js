import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, BeforeLogin, Details, Dashboard } from "./pages";
import ProtectedUser from "./protectedUser/protectedUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeforeLogin />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedUser />}>
          <Route path="/details" element={<Details />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
