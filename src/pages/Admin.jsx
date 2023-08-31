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
            <div className="navbar-end gap-12">
              <button>
                <div
                onClick={() => dispatch(AdminPage(navigate))}
                className="text-2xl font-semibold scroll-smooth"
              >
                Admin
              </div>
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
        <div className="flex justify-end mt-20 mx-64">
          <div className="mb-3">
            <div className="relative w-64">
              <input
                type="search"
                className="relative m-0 block w-full rounded border border-solid border-gray-300 bg-gray-200 bg-clip-padding pl-10 pr-10 py-[0.5rem] text-white font-normal leading-[1.6] placeholder-gray-300 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder-text-neutral-200 dark:focus:border-primary"
                placeholder="Cari Akun"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
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
            <table style={{ borderCollapse: "collapse", width: "1000px" }}>
              <thead>
                <tr
                  className="text-white"
                  style={{ backgroundColor: "#030C5A" }}
                >
                  <th style={tableHeaderStyle}>No</th>
                  <th style={tableHeaderStyle}>Username</th>
                  <th style={tableHeaderStyle}>Aksi</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {currentData && currentData.length > 0 ? (
                  currentData.map((user, index) => (
                    <tr key={user.id}>
                      <td style={tableDataStyle}>{startIndex + index + 1}</td>
                      <td style={tableDataStyle}>{user.username}</td>
                      <td style={tableDataStyle}>
                        <button
                          className="bg-transparant text-[#4F709C] mr-3"
                          onClick={() => GoEdit(user.id)}
                          style={{
                            width: "80px",
                            height: "30px",
                            fontSize: "15px",
                            borderRadius: "10px",
                          
                          }}
                        >
                          Edit Akun
                        </button>
                        <button
                          className="bg-transparant text-[#4F709C]"                          style={{
                            width: "90px",
                            height: "30px",
                            fontSize: "15px",
                            borderRadius: "10px",
                            marginLeft:"10px",
                          }}
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          Hapus Akun
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} style={tableDataStyle}>
                      No data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div
              className="flex justify-end text-black mb-5"
              style={paginationStyle}
            >
              {/* Render previous page arrow */}
              <>Tampilkan Halaman</>
              <button
                onClick={navigateToPreviousPage}
                style={{
                  ...buttonStyle,
                  backgroundColor:
                    clickedArrow === "previous" && currentPage !== 1
                      ? "transparent"
                      : currentPage === 1
                      ? "gray"
                      : "white",
                  color: currentPage === 1 ? "white" : "blue",
                }}
                disabled={currentPage === 1}
              >
                {"<"}
              </button>

              {/* Render pagination buttons */}
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  style={{
                    ...buttonStyle,
                    backgroundColor:
                      pageNumber === currentPage ? "blue" : "white",
                    color: pageNumber === currentPage ? "white" : "blue",
                  }}
                >
                  {pageNumber}
                </button>
              ))}

              {/* Render next page arrow */}
              <button
                onClick={navigateToNextPage}
                style={{
                  ...buttonStyle,
                  backgroundColor:
                    clickedArrow === "next" && currentPage !== totalPages
                      ? "transparent"
                      : currentPage === totalPages
                      ? "gray"
                      : "white",
                  color: currentPage === totalPages ? "white" : "blue",
                }}
                disabled={currentPage === totalPages}
              >
                {">"}
              </button>
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

const tableHeaderStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

// Gaya untuk sel data tabel
const tableDataStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
  textAlign: "center",
};

const paginationStyle = {
  display: "flex",
};

// Gaya untuk tombol pagination
const buttonStyle = {
  padding: "2px 10px",
  margin: "0 2px",
  border: "1px solid black",
  backgroundColor: "white",
  color: "blue",
  cursor: "pointer",
};

export default AdminPage;
