import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import {jwtDecode} from 'jwt-decode';
import { getAllUser, deleteUser } from "../store/actions/admin";
import { logout } from "../store/actions/auth";

const itemsPerPage = 5;
const AdminPage = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [token, setToken] = useState(false);

  // Define your JWT secret key (used for verifying the token)
  // var token = accessToken;
  // token = token.replace('Bearer','');
  // var jwt = require('jsonwebtoken');
  // var decoded = jwt.decode(token);
  // console.log(decoded)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.adminReducers);
  
  useEffect(() => {
    dispatch(getAllUser());
    setToken(jwtDecode(accessToken))
  }, [dispatch, accessToken]);
  
  // console.log(token);
  const [currentPage, setCurrentPage] = useState(1);
  // const [users, setUsers] = useState(data);

  const [clickedArrow, setClickedArrow] = useState(null);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const navigateToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setClickedArrow("previous");
  };

  const navigateToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    setClickedArrow("next");
  };

  const navigateToFirstPage = () => {
    if (currentPage !== 1) {
      handlePageChange(1);
    }
  };

  const navigateToLastPage = () => {
    if (currentPage !== totalPages) {
      handlePageChange(totalPages);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data?.user?.slice(startIndex, endIndex);
  const totalPages = Math.ceil((data?.user?.length || 0) / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const redirectToAddPage = () => {
    navigate("/addacc");
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
    window.location.reload();
  };

  return (
    <div className="relative bg-white">
      <div>
        <div className="px-20 pt-12 pb-9 bg-[#213555] text-white">
          <div className="navbar ">
            <div className="navbar-start">
              <div className="flex items-center">
                <div>
                  <img src="/logo_dkk.png" alt="logo" className="w-28 h-24" />
                </div>
                <div className="flex-col">
                  <div className="font-semibold text-2xl">Dashboard Admin</div>
                  <div className="font-semibold text-2xl">SDKPT</div>
                </div>
              </div>
            </div>
            <div className="navbar-end gap-12 relative">
              <button className="flex items-center">
                <a
                  href="/dashboard"
                  className="text-2xl font-semibold scroll-smooth text-white"
                >
                  Dashboard
                </a>
              </button>
              <button className="flex items-center">
                <a
                  href="/editPusk"
                  className="text-2xl font-semibold scroll-smooth text-white"
                >
                  PKP
                </a>
              </button>
              <button>
                <div
                  onClick={() => dispatch(logout(navigate))}
                  className="text-2xl font-semibold scroll-smooth"
                >
                  Logout
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center mt-20 mb-5">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="text-xl font-bold text-black mr-[200px]">
                  Kelola Akun
                </p>
                <div className=" pl-10">
                  <button
                    onClick={redirectToAddPage}
                    className="p-3 text-white bg-[#4F709C] border-[#4F709C] rounded-md"
                  >
                    Tambah Akun
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-6 mb-5">
                <div className="flex flex-col">
                  <table style={{ borderCollapse: "collapse", width: "800px" }}>
                    <thead>
                      <tr className="text-white bg-[#213555]">
                        <th className=" py-2 px-3 ">No</th>
                        <th className=" py-2 px-3 text-left">Username</th>
                        <th className=" py-2 px-3 ">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="text-black">
                      {currentData && currentData.length > 0 ? (
                        currentData.map((user, index) => (
                          <tr key={user.id}>
                            <td
                              className={`border py-2 px-3 ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-300" // Menentukan warna latar belakang berdasarkan nomor ganjil/genap
                              }`}
                            >
                              {startIndex + index + 1}
                            </td>
                            <td
                              className={`border py-2 px-3 ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-300" // Menentukan warna latar belakang berdasarkan nomor ganjil/genap
                              }`}
                            >
                              <span className="flex items-center">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-7 h-7 mr-1 inline"
                                >
                                  <g
                                    id="SVGRepo_bgCarrier"
                                    stroke-width="0"
                                  ></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z"
                                      fill="#4F709C"
                                    ></path>
                                    <path
                                      d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z"
                                      fill="#4F709C"
                                    ></path>
                                  </g>
                                </svg>
                                {user.username}
                              </span>
                            </td>
                            <td
                              className={`border py-2 px-3 text-center ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-300" // Menentukan warna latar belakang berdasarkan nomor ganjil/genap
                              }`}
                            >
                              <button
                                className="bg-transparant text-[#4F709C]"
                                style={{
                                  width: "auto",
                                  height: "30px",
                                  fontSize: "15px",
                                  borderRadius: "10px",
                                  marginLeft: "10px",
                                }}
                                onClick={() => handleDeleteUser(user.id)}
                              >
                                {/* Menambahkan ikon ke dalam button */}
                                <svg
                                  fill="#4F709C"
                                  viewBox="0 0 32 32"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-5 h-5 mr-1 inline" // Mengatur ukuran ikon
                                >
                                  <g
                                    id="SVGRepo_bgCarrier"
                                    stroke-width="0"
                                  ></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <title>cancel</title>
                                    <path d="M16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM21.961 12.209c0.244-0.244 0.244-0.641 0-0.885l-1.328-1.327c-0.244-0.244-0.641-0.244-0.885 0l-3.761 3.761-3.761-3.761c-0.244-0.244-0.641-0.244-0.885 0l-1.328 1.327c-0.244 0.244-0.244 0.641 0 0.885l3.762 3.762-3.762 3.76c-0.244 0.244-0.244 0.641 0 0.885l1.328 1.328c0.244 0.244 0.641 0.244 0.885 0l3.761-3.762 3.761 3.762c0.244 0.244 0.641 0.244 0.885 0l1.328-1.328c0.244-0.244 0.244-0.641 0-0.885l-3.762-3.76 3.762-3.762z"></path>
                                  </g>
                                </svg>
                                Hapus Akun
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={3}
                            className="p-2 border-b border-solid border-[#ddd] text-center"
                          >
                            No data available.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className="flex justify-end text-black mt-5 mb-5 space-x-2">
                    <span className="mr-5">Tampilkan Halaman</span>
                    <button
                      onClick={navigateToFirstPage}
                      className={`${
                        clickedArrow === "first" && currentPage !== 1
                          ? "border-transparent text-gray-500"
                          : currentPage === 1
                          ? "bg-white text-black"
                          : "bg-white text-black"
                      }`}
                      disabled={currentPage === 1}
                    >
                      First
                    </button>
                    <button
                      onClick={navigateToPreviousPage}
                      className={`${
                        clickedArrow === "previous" && currentPage !== 1
                          ? "border-transparent text-gray-500"
                          : currentPage === 1
                          ? "bg-white text-black"
                          : "bg-white text-black"
                      } w-4 h-8 m-0`}
                      disabled={currentPage === 1}
                    >
                      {"<"}
                    </button>

                    {pageNumbers.map((pageNumber) => (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`${
                          pageNumber === currentPage
                            ? "bg-white text-black border-black"
                            : "bg-white text-black border-black"
                        } w-8 h-8 m-0`}
                      >
                        {pageNumber}
                      </button>
                    ))}

                    <button
                      onClick={navigateToNextPage}
                      className={`${
                        clickedArrow === "next" && currentPage !== totalPages
                          ? "border-transparent text-gray-500"
                          : currentPage === totalPages
                          ? "bg-white text-black"
                          : "bg-white text-black"
                      } w-4 h-8 `}
                      disabled={currentPage === totalPages}
                    >
                      {">"}
                    </button>
                    <button
                      onClick={navigateToLastPage}
                      className={`${
                        clickedArrow === "last" && currentPage !== totalPages
                          ? "border-transparent text-gray-500"
                          : currentPage === totalPages
                          ? "bg-white text-black"
                          : "bg-white text-black"
                      }`}
                      disabled={currentPage === totalPages}
                    >
                      Last {/* Change button text to "Last" */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AdminPage;
