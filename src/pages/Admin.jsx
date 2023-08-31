import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import { getAllUser, deleteUser } from "../store/actions/admin";
import { logout } from "../store/actions/auth";

const itemsPerPage = 5;
const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.adminReducers);
  console.log(data);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  // const [users, setUsers] = useState(data);

  const GoEdit = (id) => {
    navigate("/editacc", {
      state: { userId: id },
    }); // Ganti "/admin" dengan path halaman admin yang sesuai
  };

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
              <div className="flex items-center">
                <div className="mr-2">
                  {/* Mengganti konten ikon dengan SVG yang baru */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 h-9 text-white" // Menambahkan kelas text-white
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z"
                        fill="#fafcff" // Mengganti warna ikon menjadi putih (#fafcff)
                      />
                      <path
                        d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z"
                        fill="#fafcff" // Mengganti warna ikon bagian dalam menjadi putih (#fafcff)
                      />
                    </g>
                  </svg>
                </div>
                <div
                  onClick={() => dispatch(AdminPage(navigate))}
                  className="text-2xl font-semibold scroll-smooth text-white"
                >
                  Admin
                </div>
              </div>
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
              <div className="flex flex-nowrap">
                <p className="text-xl font-bold text-base-300 mr-[200px]">
                  Kelola Akun
                </p>
                <div className="flex justify-end ">
                  <div className="flex justify-end w-64 relative ml-14">
                    <input
                      type="search"
                      className="py-2 pl-10 pr-10 relative m-0 block w-full rounded   bg-[#D9D9D9] bg-clip-padding text-white font-normal leading-[1.6] placeholder-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder-text-neutral-200 dark:focus:border-primary"
                      placeholder="Cari Akun"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className=" pl-10">
                  <button
                    onClick={redirectToAddPage}
                    className="btn text-white bg-[#4F709C] border-[#4F709C] rounded-full"
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
                                className="bg-transparant text-[#4F709C] mr-3"
                                onClick={() => GoEdit(user.id)}
                                style={{
                                  width: "auto",
                                  height: "30px",
                                  fontSize: "15px",
                                  borderRadius: "10px",
                                }}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-7 h-7 mr-1 inline" // Mengatur ukuran ikon
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
                                    {/* Isi path SVG Anda di sini */}
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.0175 19C10.6601 19 10.3552 18.7347 10.297 18.373C10.2434 18.0804 10.038 17.8413 9.76171 17.75C9.53658 17.6707 9.31645 17.5772 9.10261 17.47C8.84815 17.3365 8.54289 17.3565 8.30701 17.522C8.02156 17.7325 7.62943 17.6999 7.38076 17.445L6.41356 16.453C6.15326 16.186 6.11944 15.7651 6.33361 15.458C6.49878 15.2105 6.52257 14.8914 6.39601 14.621C6.31262 14.4332 6.23906 14.2409 6.17566 14.045C6.08485 13.7363 5.8342 13.5051 5.52533 13.445C5.15287 13.384 4.8779 13.0559 4.87501 12.669V11.428C4.87303 10.9821 5.18705 10.6007 5.61601 10.528C5.94143 10.4645 6.21316 10.2359 6.33751 9.921C6.37456 9.83233 6.41356 9.74433 6.45451 9.657C6.61989 9.33044 6.59705 8.93711 6.39503 8.633C6.1424 8.27288 6.18119 7.77809 6.48668 7.464L7.19746 6.735C7.54802 6.37532 8.1009 6.32877 8.50396 6.625L8.52638 6.641C8.82735 6.84876 9.21033 6.88639 9.54428 6.741C9.90155 6.60911 10.1649 6.29424 10.2375 5.912L10.2473 5.878C10.3275 5.37197 10.7536 5.00021 11.2535 5H12.1115C12.6248 4.99976 13.0629 5.38057 13.1469 5.9L13.1625 5.97C13.2314 6.33617 13.4811 6.63922 13.8216 6.77C14.1498 6.91447 14.5272 6.87674 14.822 6.67L14.8707 6.634C15.2842 6.32834 15.8528 6.37535 16.2133 6.745L16.8675 7.417C17.1954 7.75516 17.2366 8.28693 16.965 8.674C16.7522 8.99752 16.7251 9.41325 16.8938 9.763L16.9358 9.863C17.0724 10.2045 17.3681 10.452 17.7216 10.521C18.1837 10.5983 18.5235 11.0069 18.525 11.487V12.6C18.5249 13.0234 18.2263 13.3846 17.8191 13.454C17.4842 13.5199 17.2114 13.7686 17.1083 14.102C17.0628 14.2353 17.0121 14.3687 16.9562 14.502C16.8261 14.795 16.855 15.1364 17.0323 15.402C17.2662 15.7358 17.2299 16.1943 16.9465 16.485L16.0388 17.417C15.7792 17.6832 15.3698 17.7175 15.0716 17.498C14.8226 17.3235 14.5001 17.3043 14.2331 17.448C14.0428 17.5447 13.8475 17.6305 13.6481 17.705C13.3692 17.8037 13.1636 18.0485 13.1099 18.346C13.053 18.7203 12.7401 18.9972 12.3708 19H11.0175Z"
                                      stroke="#4F709C"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M13.9747 12C13.9747 13.2885 12.9563 14.333 11.7 14.333C10.4437 14.333 9.42533 13.2885 9.42533 12C9.42533 10.7115 10.4437 9.66699 11.7 9.66699C12.9563 9.66699 13.9747 10.7115 13.9747 12Z"
                                      stroke="#4F709C"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </g>
                                </svg>
                                Edit Akun
                              </button>
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
