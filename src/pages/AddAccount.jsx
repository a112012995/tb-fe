import React, { useState } from "react";
import Footer from "../components/Footer";
import { createUser } from "../store/actions/admin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
    const res = await dispatch(createUser(data, history))
      .then((response) => ({ response }))
      .catch((err) => ({ err }));
    console.log(res);
  };

  const BackAdmin = () => {
    navigate("/admin");
  };
  return (
    <div className="relative bg-white">
      <div className="px-20 pt-12 pb-9 bg-[#213555] text-white">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="flex items-center">
              <div>
                <img src="/logo_dkk.png" alt="logo" className="w-28 h-24" />
              </div>
              <div className="flex-col">
                <div className="font-semibold text-2xl">SDKPT</div>
                <div className="font-semibold text-2xl">Kota Semarang</div>
              </div>
            </div>
          </div>
          <div className="navbar-end gap-12">
            <a href="#" className="text-2xl font-semibold scroll-smooth">
              Home
            </a>
            <a href="login" className="text-2xl font-semibold scroll-smooth">
              Logout
            </a>
          </div>
        </div>
      </div>
      <div className="relative mt-18 mb-5">
        <div className="relative w-170 px-40">
          <div className="py-12">
            <div className="text-3xl px-10 font-bold text-black">
              Tambah Akun
            </div>
          </div>
          <div className="toast">
            <div className="alert alert-info">
              <span>New message arrived.</span>
            </div>
          </div>
          <div className="w-96  bg-white">
            <form class="w-full max-w-md" onSubmit={handleSubmit}>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Username
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class="bg-white appearance-none border-2 border-gray-400 rounded-md w-full py-2 px-8 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                    id="inline-full-name"
                    type="username"
                    placeholder="Perawat"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      borderRadius: "20px",
                      width: "400px",
                      height: "42px",
                    }}
                    value={username}
                    onChange={handleUsername}
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Password
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class="bg-white appearance-none border-2 border-gray-400 justify-center rounded-md w-full py-2 px-8 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                    id="inline-password"
                    type="password"
                    placeholder="*********"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      borderRadius: "20px",
                      width: "400px",
                      height: "42px",
                    }}
                    value={password}
                    onChange={handlePassword}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center pt-9">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3 flex justify-end">
                  <button
                    className="shadow w-24 bg-white  text-black font-bold py-2 px-4 mr-4"
                    type="button"
                    style={{ borderRadius: "20px", outline: "2px solid black" }}
                    onClick={BackAdmin}
                  >
                    Batal
                  </button>
                  <button
                    className="shadow w-24 bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
                    type="submit"
                    style={{ borderRadius: "20px" }}
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddAccount;
