import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { getUserById, updateUser } from "../store/actions/admin";
import { useDispatch, useSelector } from "react-redux";

const EditAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataById } = useSelector((state) => state.adminReducers);
  console.log(dataById);
  const { state } = useLocation();
  const userId = state ? state.userId : null;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
    
  }, [dispatch, userId]);

  useEffect(() => {
    // Set username and password when dataById changes
    console.log("EditAccount component mounted");
    if (dataById) {
      setUsername(dataById.username);
      setPassword(dataById.password);
    }
  }, [dataById]);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const updateUserForm = async () => {
    const id = dataById.id;
    const data = {
      username,
      password,
    };

    try {
      const response = await dispatch(updateUser(id, data));

      if (response && response.error) {
        console.error(response.error);
      } else {
        // Navigasi kembali ke halaman admin setelah berhasil menyimpan
        navigate("/admin");
      }
    } catch (error) {
      console.error(error);
    }
    console.log("Update user form function called");
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
            <a href="login" className="text-2xl font-semibold scroll-smooth">
              Logout
            </a>
          </div>
        </div>
      </div>
      <div className="relative mt-18 mb-5">
        <div className="relative w-170 px-40">
          <div className="py-12">
            <div className="text-3xl px-10 font-bold text-black">Edit Akun</div>
          </div>
          <div className="w-96  bg-white">
            <form onSubmit={updateUserForm} className="w-full max-w-md">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-full-name"
                  >
                    Username
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    value={username}
                    onChange={handleUsername}
                    className="bg-white appearance-none border-2 border-gray-400 rounded-md w-full py-2 px-8 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                    id="inline-full-name"
                    type="username"
                    placeholder="Username"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      borderRadius: "20px",
                      width: "400px",
                      height: "42px",
                    }}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Password
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    value={password}
                    onChange={handlePassword}
                    className="bg-white appearance-none border-2 border-gray-400 justify-center rounded-md w-full py-2 px-8 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                    id="inline-password"
                    type="password"
                    placeholder="*********"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      borderRadius: "20px",
                      width: "400px",
                      height: "42px",
                    }}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center pt-9">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3 flex justify-end">
                  <button
                    className="shadow w-24 bg-white text-black font-bold py-2 px-4 mr-4"
                    type="button"
                    style={{ borderRadius: "20px", outline: "2px solid black" }}
                    onClick={BackAdmin} // Memanggil fungsi goBackToAdminPage ketika tombol ditekan
                  >
                    Batal
                  </button>
                  <button
                    className="shadow w-24 bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
                    type="submit"
                    style={{ borderRadius: "20px" }}
                  >
                    Simpan
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

export default EditAccount;
