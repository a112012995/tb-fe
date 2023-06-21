import React, { useState } from 'react';

const data = [
  { id: 1, jumlahKasus: 25, kesembuhan: 8, kematian: 20, detail: 'Detail Pasien 1' },
  { id: 2, jumlahKasus: 15, kesembuhan: 10, kematian: 1, detail: 'Detail Pasien 2' },
  { id: 3, jumlahKasus: 5, kesembuhan: 2, kematian: 2, detail: 'Detail Pasien 3' },
  { id: 5, jumlahKasus: 3, kesembuhan: 2, kematian: 4, detail: 'Detail Pasien 5' },
  { id: 6, jumlahKasus: 6, kesembuhan: 5, kematian: 5, detail: 'Detail Pasien 6' },
  { id: 7, jumlahKasus: 12, kesembuhan: 5, kematian: 3, detail: 'Detail Pasien 7' },
  { id: 8, jumlahKasus: 13, kesembuhan: 5, kematian: 1, detail: 'Detail Pasien 8' },
  { id: 9, jumlahKasus: 9, kesembuhan: 7, kematian: 4, detail: 'Detail Pasien 9' },
  { id: 10, jumlahKasus: 11, kesembuhan: 8, kematian: 6, detail: 'Detail Pasien 10' },
  { id: 11, jumlahKasus: 1, kesembuhan: 9, kematian: 7, detail: 'Detail Pasien 11' },
  // ...tambahkan data pasien lainnya di sini
];

const itemsPerPage = 5;

const TableDet = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
        <div className='flex justify-center mt-20 mb-5'>
            <table style={{ borderCollapse: 'collapse', width: '1000px' }}>
                <thead>
                <tr className='text-white' style={{ backgroundColor: '#030C5A' }}>
                    <th style={tableHeaderStyle}>Jumlah Kasus</th>
                    <th style={tableHeaderStyle}>Angka Kesembuhan</th>
                    <th style={tableHeaderStyle}>Angka Kematian</th>
                    <th style={tableHeaderStyle}>Detail Pasien</th>
                </tr>
                </thead>
                <tbody className='text-black'>
                {currentData.map((item) => (
                    <tr key={item.id} style={{ backgroundColor: '#ffffff' }}>
                    <td style={tableDataStyle}>{item.jumlahKasus}</td>
                    <td style={tableDataStyle}>{item.kesembuhan}</td>
                    <td style={tableDataStyle}>{item.kematian}</td>
                    <td style={tableDataStyle}>{item.detail}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      
      <div className='text-black mb-10' style={paginationStyle}>
        {Array(Math.ceil(data.length / itemsPerPage))
          .fill()
          .map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              style={currentPage === index + 1 ? activeButtonStyle : buttonStyle}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

// Gaya untuk header tabel
const tableHeaderStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

// Gaya untuk sel data tabel
const tableDataStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'center',
};

// Gaya untuk kontainer pagination
const paginationStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
};

// Gaya untuk tombol pagination
const buttonStyle = {
  padding: '5px 10px',
  margin: '0 2px',
  border: '1px solid black',
  backgroundColor: '#f2f2f2',
  cursor: 'pointer',
};
const activeButtonStyle = {
    padding: '5px 10px',
    margin: '0 2px',
    border: 'none',
    backgroundColor: '#ccc',
    cursor: 'pointer',
};
export default TableDet;