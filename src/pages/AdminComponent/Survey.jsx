import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSurveyStatus, getSurveyByIdKel } from "../../store/actions/survey";
import * as XLSX from "xlsx";
import { createSurvey } from "../../store/actions/survey";
import Swal from "sweetalert2";
import { getKelurahan } from "../../store/actions/location";
// import { useNavigate } from "react-router-dom";

const itemsPerPage = 10;
const Survey = () => {
  const dispatch = useDispatch();
  const { dataStat } = useSelector((state) => state.surveyReducers);
  const { dataKel } = useSelector((state) => state.locationReducers);
  // console.log(dataKel);

  useEffect(() => {
    dispatch(getKelurahan())
    dispatch(getAllSurveyStatus());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [penilaian, setPenilaian] = useState("");
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [id, setId] = useState(false);
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

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.name.endsWith(".xls") || file.name.endsWith(".xlsx")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = XLSX.utils.sheet_to_json(worksheet);

          const specificRows = json.slice(0, 185);
          const updatedJsonData = specificRows.map((item) => {
            // Tidak ada pemetaan nama kolom
            return item;
          });
          setPenilaian(updatedJsonData);
        };
        reader.readAsArrayBuffer(file);
      } else {
        alert("Silakan unggah file Excel (.xls atau .xlsx) yang valid.");
      }
    }
  };

  const formPenilaian = async () => {
    const res = await dispatch(createSurvey(penilaian))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
    // console.log(res.error);
    if (res.error) {
      setModal(false);
      setError(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
    if (!res.error) {
      setModal(false);
      setError(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data Survey berhasil Disimpan",
        showConfirmButton: false,
        timer: 1500,
      });
      setPenilaian();
    }
    dispatch(getAllSurveyStatus())
  };

  const modalHandler = async (id) => {
    setModal(true);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = dataStat?.slice(startIndex, endIndex);
  const totalPages = Math.ceil((dataStat?.length || 0) / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex flex-col">
      <div className="space-y-4">
        <p className="text-2xl font-bold text-[#4F709C]">Daftar Kelurahan</p>
        <button
          onClick={() => modalHandler()}
          className="px-3 py-1 bg-[#5CB85F] text-white rounded-md"
          type="submit"
        >
          Tambah Data Survey
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Puskesmas</th>
              <th>Survey Terakhir</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {currentData && currentData.length > 0 ? (
              currentData.map((item) => (
                <tr key={item.kelurahan_id}>
                  <td>{item.kelurahan_id}</td>
                  <td>
                    <p className="font-semibold">
                      Kelurahan {item.kelurahan_name}
                    </p>
                  </td>
                  <td className="">{item.bulan}</td>
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
      </div>
      <div className="flex justify-center text-black mt-5 mb-5 space-x-2">
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
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-[2000]">
          <div className="p-6 rounded-md bg-white  h-fit relative">
            <div className=" rounded-lg w-fit p-4 text-center bg-[#CFE2FF] border-[#9EC5FE] border-2">
              <div className="flex flex-col self-center text-center justify-center">
                <h2 className="font-bold text-2xl">Upload Survey Baru</h2>
                <h2 className="font-bold">
                  Masukkan Data Survey Kelurahan Berupa Excel
                </h2>
                <div className="flex flex-col space-y-2 mt-3 justify-between w-fit self-center">
                  <form>
                    <label htmlFor="upload">
                      <input
                        type="file"
                        name="upload"
                        accept=".xls, .xlsx"
                        id="upload"
                        required
                        onChange={readUploadFile}
                        className="file-input w-full max-w-xs"
                      />
                    </label>
                  </form>
                  <button
                    onClick={() => formPenilaian()}
                    className="px-4 py-2 bg-[#5CB85F] text-white font-semibold text-md rounded-md"
                    type="submit"
                  >
                    Upload Penilaian baru
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fixed inset-0 bg-black opacity-50"
            onClick={() => setModal(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Survey;
