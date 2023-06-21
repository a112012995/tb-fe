import React, { useState } from "react";
import bgHero from "../assets/bg-hero.png";

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
        <div className="w-1/2 flex items-center justify-center">
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
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
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
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
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
          <img src={bgHero} alt="Background Image" className="absolute top-0 left-0 w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 text-white text-center">
            <div className="text-5xl font-bold leading-120 text-justify mb-4">Sistem Distribusi Kerentanan Penyakit Tuberkulosis</div>
          </div>
        </div>
      </div>

      {/* <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 dark:bg-white">
        <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-8 rounded-lg shadow-xl">
          <h3 className="text-center font-bold text-2xl text-gray-800">
            SEMAR BETUL BANGET
          </h3>
          <div className="mt-8">
            <form
              className="flex flex-col"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="mb-6 pt-2 rounded bg-gray-100">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2 ml-3"
                  htmlFor="email"
                >
                  Username
                </label>
                <input
                  type="username"
                  id="username"
                  className="bg-gray-100 rounded-b w-full text-gray-800 focus:outline-none border-b-4 border-green-600 focus:border-green-700 transition duration-500 px-3 pb-2"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-6 pt-2 rounded bg-gray-100">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2 ml-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  aria-hidden
                  type="password"
                  id="password"
                  className="bg-gray-100 rounded-b w-full text-gray-800 focus:outline-none border-b-4 border-green-600 focus:border-green-700 transition duration-500 px-3 pb-2"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="off"
                  required
                />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button
                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded shadow-lg hover:shadow-xl transition duration-100"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Login;
