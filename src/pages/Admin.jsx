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
                  <div className="font-semibold text-2xl">SDKPT</div>
                  <div className="font-semibold text-2xl">Kota Semarang</div>
                </div>
              </div>
            </div>
            <div className="navbar-end gap-12">
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
        <div className="flex mt-20 mx-64">
          <button
            onClick={redirectToAddPage}
            className="btn text-white bg-[#35B438] border-[#35B438]"
          >
            Tambahkan Akun
          </button>
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
                          className="bg-[#35B438] text-white mr-3"
                          onClick={() => GoEdit(user.id)}
                          style={{
                            width: "40px",
                            height: "25px",
                            fontSize: "13px",
                            borderRadius: "10px",
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-[#35B438] text-white"
                          style={{
                            width: "50px",
                            height: "25px",
                            fontSize: "13px",
                            borderRadius: "10px",
                          }}
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          Hapus
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
            <div className="flex justify-end text-black mb-5" style={paginationStyle}>
              {/* Render previous page arrow */}
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
