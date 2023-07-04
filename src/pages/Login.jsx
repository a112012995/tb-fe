import React, { useState } from "react";
import bgHero from "../assets/bg-login.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        // Perform any necessary actions with the response data
        localStorage.setItem("accessToken", data.data.accessToken);
        // e.g., store the access token, redirect to another page, etc.
        window.location.href = "/details";
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login.");
    }
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 flex items-center justify-center bg-white">
          {/* Konten form login */}
          <div className="w-96 p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Selamat Datang!</h2>
            <form className="flex flex-col" method="POST" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block font-regular mb-2">
                  Username
                </label>
                <input
                  type="username"
                  id="username"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-regular mb-2">
                  Password
                </label>
                <input
                  aria-hidden
                  type="password"
                  id="password"
                  placeholder="6+ Karakter"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="off"
                  required
                />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button type="submit" className="w-full bg-[#213555] text-white font-semibold py-2 px-4 rounded-md">
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2 relative">
          <img src={bgHero} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 text-white">
            <div className="text-[56px] w-[577px] font-bold leading-none" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Sistem Distribusi Kerentanan Penyakit Tuberkulosis
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
