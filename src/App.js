import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, BeforeLogin, Details, Dashboard, LoginAdmin} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<BeforeLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<LoginAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
