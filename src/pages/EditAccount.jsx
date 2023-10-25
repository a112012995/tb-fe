import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import { logout } from "../store/actions/auth";
import { getLocationFaskes } from "../store/actions/location";

const itemsPerPage = 8;
const EditAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { locFaskes } = useSelector((state) => state.locationReducers);
  console.log(locFaskes);

  useEffect(() => {
    dispatch(getLocationFaskes());
  }, [dispatch]);

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = locFaskes?.slice(startIndex, endIndex);
  const totalPages = Math.ceil((locFaskes?.length || 0) / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

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
                  Puskesmas
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
              <a className="w-fit" href="/admin">
                <button className="bg-[#4F709C] text-left px-4 py-2 rounded-md text-white">
                  Kembali
                </button>
              </a>
              <p className="text-xl font-bold text-black mr-[200px] mt-4">
                Nilai Puskesmas
              </p>
              <div className="flex justify-center mt-6 mb-5">
                <div className="flex flex-col">
                  <table style={{ borderCollapse: "collapse", width: "800px" }}>
                    <thead>
                      <tr className="text-white bg-[#213555]">
                        <th className=" py-2 px-3 ">No</th>
                        <th className=" py-2 px-3 text-left">Puskesmas</th>
                        <th className=" py-2 px-3 text-left">Kode</th>
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
                                Puskesmas {user.nama_pusk}
                              </span>
                            </td>
                            <td
                              className={`border py-2 px-3 text-left ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-300" // Menentukan warna latar belakang berdasarkan nomor ganjil/genap
                              }`}
                            >
                              <span className="flex items-center">
                                {user.kode_pusk}
                              </span>
                            </td>
                            <td
                              className={`border py-2  text-center ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-300" // Menentukan warna latar belakang berdasarkan nomor ganjil/genap
                              }`}
                            >
                              <div className="flex items-center justify-center space-x-2">
                                <input
                                  type="file"
                                  className="file-input file-input-bordered file-input-sm w-full max-w-xs rounded-md "
                                />
                                <button
                                  className="px-3 py-1 bg-[#5CB85F] text-white rounded-md"
                                  // onClick={() => {
                                  //   // Tambahkan logika penyimpanan di sini
                                  //   // Misalnya, Anda dapat mengirim file ke server atau melakukan tindakan lainnya.
                                  //   // Anda juga dapat mengakses nilai input file dengan referensinya.
                                  //   // console.log(inputFileRef.current.files);
                                  // }}
                                  type="submit"
                                >
                                  Simpan
                                </button>
                              </div>
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
                    <button
                      onClick={navigateToPreviousPage}
                      className={`${
                        clickedArrow === "previous" && currentPage !== 1
                          ? "bg-[#4F709C] text-white"
                          : currentPage === 1
                          ? "bg-[#4F709C] text-white"
                          : "bg-zinc-200 text-black"
                      } w-fit px-3 m-0`}
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
                            ? "bg-[#4F709C] text-white"
                            : "bg-zinc-200 text-black"
                        } w-8 h-8 m-0`}
                      >
                        {pageNumber}
                      </button>
                    ))}

                    <button
                      onClick={navigateToNextPage}
                      className={`${
                        clickedArrow === "next" && currentPage !== totalPages
                          ? "bg-[#4F709C] text-white"
                          : currentPage === totalPages
                          ? "bg-[#4F709C] text-white"
                          : "bg-zinc-200 text-black"
                      } w-fit px-3 m-0`}
                      disabled={currentPage === totalPages}
                    >
                      {">"}
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

export default EditAccount;
