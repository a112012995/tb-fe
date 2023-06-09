import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const itemsPerPage = 10;

const TableDet = () => {
  // const { state } = useLocation();
  // console.log(state.areaId);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { dataByIdKel } = useSelector((state) => state.pasienReducers);
  console.log(dataByIdKel);

  useEffect(() => {
    if (selectedItem) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [selectedItem]);

  const totalPages = Math.ceil(dataByIdKel.length / itemsPerPage);

  const getCurrentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = startIndex + itemsPerPage - 1;
    return dataByIdKel.slice(startIndex - 1, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDetailClick = (itemId) => {
    const selectedItem = dataByIdKel.find((item) => item.id === itemId);
    setSelectedItem(selectedItem);
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5; // Jumlah tombol yang terlihat sekaligus
    const totalButtons = Math.min(totalPages, maxVisibleButtons); // Total tombol yang ditampilkan
    const halfVisibleButtons = Math.floor(maxVisibleButtons / 2); // Setengah dari jumlah tombol yang ditampilkan

    let startPage = currentPage - halfVisibleButtons; // Halaman awal yang ditampilkan
    if (startPage <= 0) {
      startPage = 1;
    }

    let endPage = startPage + totalButtons - 1; // Halaman akhir yang ditampilkan
    if (endPage > totalPages) {
      endPage = totalPages;
    }

    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          style={buttonStyle}
        >
          1
        </button>
      );

      if (startPage > 2) {
        buttons.push(
          <span key="start-ellipsis" style={{ padding: "2px 5px" }}>
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === currentPage}
          style={buttonStyle}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="end-ellipsis" style={{ padding: "2px 5px" }}>
            ...
          </span>
        );
      }

      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          style={buttonStyle}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="relative">
      <div className="flex justify-center mt-20 mb-5">
        <div className="flex flex-col">
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
                {getCurrentData().map((item, index) => (
                  <tr key={item.id} style={{ backgroundColor: "#ffffff" }}>
                    <td style={tableDataStyle}>
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td style={tableDataStyle}>{item.kode_pasien}</td>
                    <td style={tableDataStyle}>{item.umur}</td>
                    <td style={tableDataStyle}>{item.jenis_kelamin}</td>
                    <td style={tableDataStyle}>
                      {item.kelurahan.nama_kelurahan}
                    </td>
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
          <div
            className="flex justify-end text-black mt-5"
            style={paginationStyle}
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isPreviousDisabled}
              style={buttonStyle}
            >
              &lt;
            </button>

            {renderPaginationButtons()}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isNextDisabled}
              style={buttonStyle}
            >
              &gt;
            </button>
          </div>
        </div>
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Detail Pasien</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Kode Pasien:</td>
                      <td>{selectedItem.kode_pasien}</td>
                    </tr>
                    <tr>
                      <td>Umur:</td>
                      <td>{selectedItem.umur}</td>
                    </tr>
                    <tr>
                      <td>Jenis Kelamin:</td>
                      <td>{selectedItem.jenis_kelamin}</td>
                    </tr>
                    <tr>
                      <td>Alamat:</td>
                      <td>{selectedItem.kelurahan.nama_kelurahan}</td>
                    </tr>
                    <tr>
                      <td>Pengobatan Terakhir:</td>
                      <td>{selectedItem.tb_record.hasil_akhir}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>{/* Tambahkan logic dan tombol aksi tambahan */}</div>
            </div>
            <div style={modalFooterStyle}>
              {/* Tambahkan tombol aksi jika diperlukan */}
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
