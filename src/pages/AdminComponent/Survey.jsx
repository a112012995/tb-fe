import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/auth";
import { getKelurahan } from "../../store/actions/location";
import { getSurveyByIdKel } from "../../store/actions/survey";
import * as XLSX from "xlsx";
import { createSurvey } from "../../store/actions/survey";
import { createNilai, deleteNilaiPusk } from "../../store/actions/penilaian";
import { useNavigate } from "react-router-dom";

const itemsPerPage = 10;
const Survey = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dataKel, dataKelId } = useSelector((state) => state.locationReducers);
  const { nilaiPusk } = useSelector((state) => state.penilaianReducers);
  // console.log(dataKel);

  useEffect(() => {
    dispatch(getKelurahan());
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

  console.log(penilaian);

  // const formPenilaians = (event) => {
  //   // const getScore = dispatch(getNilaiPusk(id));
  //   if (!penilaian) {
  //     // console.log(getScore);
  //     alert("Silakan unggah file Excel (.xls atau .xlsx) yang valid.");
  //   } else {
  //     penilaian?.forEach(async (item) => {
  //       const genderLaki = item.gender_laki_laki;
  //       const dm_cases = item.dm_cases;
  //       const genderPerempuan = item.gender_perempuan;
  //       const klinikPratama = item.jumlah_klinik_pratama;
  //       const klinikUtama = item.jumlah_klinik_utama;
  //       const literasiExcellent = item.kategori_literasi_excellent;
  //       const literasiInadequate = item.kategori_literasi_inadequate;
  //       const bulan = item.bulan;
  //       const tahun = item.tahun;
  //       const literasiPlroblematic = item.kategori_literasi_problematic;
  //       const literasiSufficient = item.kategori_literasi_sufficient;
  //       const pengetahuanBaik = item.kategori_pengetahuan_baik;
  //       const pengetahuanBuruk = item.kategori_pengetahuan_buruk;
  //       const pengetahuanCukup = item.kategori_pengetahuan_cukup;
  //       const pengetahuanKurang = item.kategori_pengetahuan_kurang;
  //       const stigmaRendah = item.kategori_stigma_rendah;
  //       const stigmaSedang = item.kategori_stigma_sedang;
  //       const tidakStigma = item.kategori_stigma_tidak;
  //       const stigmaTinggi = item.kategori_stigma_tinggi;
  //       const idKelurahan = item.kelurahan_id;
  //       const namaKelurahan = item.kelurahan_name;
  //       const tidakAlkohol = item.konsumsi_alkohol_tidak;
  //       const alkohol = item.konsumsi_alkohol_ya;
  //       const pendapatan1 = item.pendapatan_keluarga_kategori_1;
  //       const pendapatan2 = item.pendapatan_keluarga_kategori_2;
  //       const pendapatan3 = item.pendapatan_keluarga_kategori_3;
  //       const pendapatan4 = item.pendapatan_keluarga_kategori_4;
  //       const pendapatan5 = item.pendapatan_keluarga_kategori_5;
  //       const diploma = item.pendidikan_diploma;
  //       const s1 = item.pendidikan_s1;
  //       const s23 = item.pendidikan_s2_s3;
  //       const tamatSd = item.pendidikan_tamat_sd;
  //       const tamatSma = item.pendidikan_tamat_sma;
  //       const tamatSmp = item.pendidikan_tamat_smp;
  //       const tidakSekolah = item.pendidikan_tidak_sekolah;
  //       const tidakTamatSd = item.pendidikan_tidak_tamat_sd;
  //       const tidakPerokok = item.perokok_aktif_tidak;
  //       const perokok = item.perokok_aktif_ya;
  //       const populasi = item.population;
  //       const kepadatanPenduduk = item.population_density;
  //       const populasiTb = item.population_tb_cases_ratio;
  //       const bekerja = item.status_bekerja_bekerja;
  //       const tidakBekerja = item.status_bekerja_tidak_bekerja;
  //       const kasusTb = item.tb_cases;
  //       const tptSerumah = item.tpt_serumah_ada;
  //       const tptTidakAda = item.tpt_serumah_tidak_ada;
  //       const tidakTpt = item.tpt_serumah_tidak_mendapatkan_tpt;
  //       const anak = item.usia_anak;
  //       const lanjut = item.usia_lanjut;
  //       const muda = item.usia_muda;
  //       const paruhBaya = item.usia_paruh_baya;
  //       const pekerjaAwal = item.usia_pekerja_awal;
  //       const pensiun = item.usia_pensiun;
  //       const praPensiun = item.usia_pra_pensiun;
  //       // console.log(item.kegiatan);
  //       const data = {
  //         genderLaki,
  //         dm_cases,
  //         genderPerempuan,
  //         klinikPratama,
  //         klinikUtama,
  //         literasiExcellent,
  //         literasiInadequate,
  //         bulan,
  //         tahun,
  //         literasiPlroblematic,
  //         literasiSufficient,
  //         pengetahuanBaik,
  //         pengetahuanBuruk,
  //         pengetahuanCukup,
  //         pengetahuanKurang,
  //         stigmaRendah,
  //         stigmaSedang,
  //         tidakStigma,
  //         stigmaTinggi,
  //         idKelurahan,
  //         namaKelurahan,
  //         tidakAlkohol,
  //         alkohol,
  //         pendapatan1,
  //         pendapatan2,
  //         pendapatan3,
  //         pendapatan4,
  //         pendapatan5,
  //         diploma,
  //         s1,
  //         s23,
  //         tamatSd,
  //         tamatSma,
  //         tamatSmp,
  //         tidakSekolah,
  //         tidakTamatSd,
  //         tidakPerokok,
  //         perokok,
  //         populasi,
  //         kepadatanPenduduk,
  //         populasiTb,
  //         bekerja,
  //         tidakBekerja,
  //         kasusTb,
  //         tptSerumah,
  //         tptTidakAda,
  //         tidakTpt,
  //         anak,
  //         lanjut,
  //         muda,
  //         paruhBaya,
  //         pekerjaAwal,
  //         pensiun,
  //         praPensiun,
  //       };
  //     });
  //   }
  // };
  const formPenilaian = async () => {
    const res = await dispatch(createSurvey(penilaian))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
    // console.log(res);
    if (!res.error) {
      setModal(false);
      setError(false);
      setPopUp(true);
      setTimeout(() => {
        setPopUp(false);
      }, 2000);
    }
  };

  const modalHandler = async (id) => {
    setId(id);
    const res = await dispatch(getSurveyByIdKel(id))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
    // console.log(res);

    if (res.response) {
      setError(false);
      setModal(true);
    }
    if (res.error) {
      setError(true);
      setModal(res.error.response.data.detail);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = dataKel?.slice(startIndex, endIndex);
  const totalPages = Math.ceil((dataKel?.length || 0) / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  // console.log(currentData)

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <p className="text-2xl font-bold text-[#4F709C]">Daftar Kelurahan</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Puskesmas</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {currentData && currentData.length > 0 ? (
              currentData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <p className="font-semibold">
                      Kelurahan {item.nama_kelurahan}
                    </p>
                  </td>
                  <td className="">
                    <button
                      onClick={() => modalHandler(item.id)}
                      className="px-3 py-1 bg-[#5CB85F] text-white rounded-md"
                      type="submit"
                    >
                      Edit
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
      {modal && !error && (
        <div className="fixed inset-0 flex items-center justify-center z-[2000]">
          <div className="p-6 rounded-md bg-white  h-fit relative">
            <div className=" rounded-lg w-fit p-4 text-center bg-[#CFE2FF] border-[#9EC5FE] border-2">
              <div className="flex flex-col self-center text-center justify-center">
                <h2 className="font-bold text-2xl">
                  Puskesmas {dataKelId.nama_pusk} Sudah Dinilai
                </h2>
                <h2 className="font-bold">Silahkan Cek Pada Dashboard Utama</h2>
                <div className="flex flex-col space-y-2 mt-3 justify-between w-fit self-center">
                  <button className="px-4 py-2 bg-[#4F709C] w-fit self-center text-white font-semibold text-md rounded-md ">
                    <a href="/dashboard">Lihat Dashboard</a>
                  </button>
                  <div className="divider">OR</div>
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
                  {penilaian ? (
                    <button
                      onClick={() => formPenilaian()}
                      className="px-4 py-2 bg-[#DC3545] text-white font-semibold text-md rounded-md"
                      type="submit"
                    >
                      Upload Penilaian baru
                    </button>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 bg-[#DC3545] text-white font-semibold text-md rounded-md"
                      type="submit"
                    >
                      <span className="loading loading-spinner loading-xs"></span>
                    </button>
                  )}
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
      {modal && error && (
        <div className="fixed inset-0 flex items-center justify-center z-[2000]">
          <div className="p-6 rounded-md bg-white  h-fit relative">
            <div className=" rounded-lg w-fit p-4 text-center bg-[#FFF3CD] text-[#664D03] border-[#FFE69E] border-2">
              <div className="flex flex-col self-center text-center justify-center">
                <h2 className="font-bold text-2xl">Belum Dilakukan Survey</h2>
                <h2 className="font-bold">
                  Silahkan input survey berupa excel
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
                        className="file-input w-full max-w-xs text-black"
                      />
                    </label>
                  </form>
                  {penilaian ? (
                    <button
                      onClick={() => formPenilaian()}
                      className="px-4 py-2 bg-[#5CB85F] text-white font-semibold text-md rounded-md"
                      type="submit"
                    >
                      Upload Penilaian Baru
                    </button>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 bg-[#5CB85F] text-white font-semibold text-md rounded-md"
                      type="submit"
                    >
                      <span className="loading loading-spinner loading-xs"></span>
                    </button>
                  )}
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
