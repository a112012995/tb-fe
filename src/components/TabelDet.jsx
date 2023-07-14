import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";


const itemsPerPage = 5;

const TableDet = () => {
  // const { state } = useLocation();
  // console.log(state.areaId);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { dataByIdKel } = useSelector((state) => state.pasienReducers);

  useEffect(() => {
    setIsModalOpen(false);
  }, [selectedItem]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDetailClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };


 
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="relative">
      <div className="flex justify-center mt-20 mb-5">
        <table style={{ borderCollapse: "collapse", width: "1000px" }}>
          <thead>
            <tr className="text-white" style={{ backgroundColor: "#030C5A" }}>
              <th style={tableHeaderStyle}>No</th>
              <th style={tableHeaderStyle}>Kode Pasien</th>
              <th style={tableHeaderStyle}>Umur</th>
              <th style={tableHeaderStyle}>Jenis Kelamin</th>
              <th style={tableHeaderStyle}>Alamat </th>
              <th style={tableHeaderStyle}>Pengobatan Terakhir</th>
              <th style={tableHeaderStyle}>Detail Pasien</th>
            </tr>
          </thead>
          {dataByIdKel && (
            <tbody className="text-black">
              {dataByIdKel?.map((item, no) => (
                <tr key={item.id} style={{ backgroundColor: "#ffffff" }}>
                  <td style={tableDataStyle}>{no + 1}</td>
                  <td style={tableDataStyle}>{item.kode_pasien}</td>
                  <td style={tableDataStyle}>{item.umur}</td>
                  <td style={tableDataStyle}>{item.jenis_kelamin}</td>
                  <td style={tableDataStyle}>{item.kelurahan_pasien}</td>
                  <td style={tableDataStyle}>{item.tb_record.hasil_akhir}</td>
                  <td style={tableDataStyle}>
                    <button
                      className="bg-[#35B438] text-white"
                      onClick={() => handleDetailClick(item.id)}
                      style={{
                        width: "80px",
                        height: "35px",
                        fontSize: "13px",
                        borderRadius: "10px",
                      }}
                    >
                      Lihat Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      <div
        className="flex justify-center text-black mb-10"
        style={paginationStyle}
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={buttonStyle}
        >
          &lt;
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(dataByIdKel.length / itemsPerPage)}
          style={buttonStyle}
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center mt-10 mb-10">
        <button
          className="bg-[#35B438] text-white mb-2"
          onClick={() => navigate("/dashboard")}
          style={{
            width: "150px",
            height: "35px",
            fontSize: "13px",
            borderRadius: "5px",
          }}
        >
          Kembali ke Dashboard
        </button>
      </div>
      {selectedItem && isModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <div style={modalHeaderStyle}>
              <h3 style={modalTitleStyle}>Detail Pasien</h3>
              <button
                style={modalCloseStyle}
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
            </div>
            <div style={modalBodyStyle}>
              <p>No: {selectedItem.no}</p>
              <p>Kode Pasien: {selectedItem.kodePasien}</p>
              <p>Umur: {selectedItem.umur}</p>
              <p>Jenis Kelamin: {selectedItem.jenisKelamin}</p>
              <p>Alamat: {selectedItem.alamat}</p>
              <p>Pengobatan Terakhir: {selectedItem.pengobatanTerakhir}</p>
            </div>
            <div style={modalFooterStyle}>
              {/* Additional logic and action buttons */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Gaya untuk header tabel
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

// Gaya untuk kontainer pagination
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

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  position: "relative",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "5px",
  maxWidth: "500px",
};

const modalHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",
};

const modalTitleStyle = {
  fontSize: "18px",
};

const modalCloseStyle = {
  cursor: "pointer",
  border: "none",
  background: "transparent",
  fontSize: "16px",
};

const modalBodyStyle = {
  marginBottom: "10px",
};

const modalFooterStyle = {
  display: "flex",
  justifyContent: "flex-end",
};

export default TableDet;
