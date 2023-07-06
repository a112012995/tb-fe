import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const data = [
  {
    no: 1,
    kodePasien: 'P001',
    umur: 25,
    jenisKelamin: 'Laki-laki',
    alamat: 'Jl. Contoh No. 123',
    pengobatanTerakhir: '2023-06-15',
    detail: 'Detail',
  },
  {
    no: 2,
    kodePasien: 'P002',
    umur: 30,
    jenisKelamin: 'Perempuan',
    alamat: 'Jl. Contoh No. 456',
    pengobatanTerakhir: '2023-06-10',
    detail: 'Detail',
  },
  {
    no: 3,
    kodePasien: 'P003',
    umur: 40,
    jenisKelamin: 'Laki-laki',
    alamat: 'Jl. Contoh No. 789',
    pengobatanTerakhir: '2023-06-05',
    detail: 'Detail',
  },
  {
    no: 4,
    kodePasien: 'P004',
    umur: 35,
    jenisKelamin: 'Perempuan',
    alamat: 'Jl. Contoh No. 111',
    pengobatanTerakhir: '2023-06-20',
    detail: 'Detail',
  },
  {
    no: 5,
    kodePasien: 'P005',
    umur: 50,
    jenisKelamin: 'Laki-laki',
    alamat: 'Jl. Contoh No. 222',
    pengobatanTerakhir: '2023-06-18',
    detail: 'Detail',
  },
  {
    no: 6,
    kodePasien: 'P006',
    umur: 45,
    jenisKelamin: 'Perempuan',
    alamat: 'Jl. Contoh No. 333',
    pengobatanTerakhir: '2023-06-11',
    detail: 'Detail',
  },
  {
    no: 7,
    kodePasien: 'P007',
    umur: 28,
    jenisKelamin: 'Laki-laki',
    alamat: 'Jl. Contoh No. 444',
    pengobatanTerakhir: '2023-06-13',
    detail: 'Detail',
  },
  {
    no: 8,
    kodePasien: 'P008',
    umur: 32,
    jenisKelamin: 'Perempuan',
    alamat: 'Jl. Contoh No. 555',
    pengobatanTerakhir: '2023-06-08',
    detail: 'Detail',
  },
  {
    no: 9,
    kodePasien: 'P009',
    umur: 37,
    jenisKelamin: 'Laki-laki',
    alamat: 'Jl. Contoh No. 666',
    pengobatanTerakhir: '2023-06-16',
    detail: 'Detail',
  },
  {
    no: 10,
    kodePasien: 'P010',
    umur: 48,
    jenisKelamin: 'Perempuan',
    alamat: 'Jl. Contoh No. 777',
    pengobatanTerakhir: '2023-06-12',
    detail: 'Detail',
  },
];

const itemsPerPage = 5;

const TableDet = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDetailClick = (itemId) => {
    // Logika atau tindakan yang ingin Anda lakukan saat tombol detail diklik
    console.log(`Detail button clicked for item with id ${itemId}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className='relative'>
       
        <div className='flex justify-center mt-20 mb-5'>
            <table style={{ borderCollapse: 'collapse', width: '1000px' }}>
                <thead>
                <tr className='text-white' style={{ backgroundColor: '#030C5A' }}>
                    <th style={tableHeaderStyle}>No</th>
                    <th style={tableHeaderStyle}>Kode Pasien</th>
                    <th style={tableHeaderStyle}>Umur</th>
                    <th style={tableHeaderStyle}>Jenis Kelamin</th>
                    <th style={tableHeaderStyle}>Alamat </th>
                    <th style={tableHeaderStyle}>Pengobatan Terakhir</th>
                    <th style={tableHeaderStyle}>Detail Pasien</th>
                </tr>
                </thead>
                <tbody className='text-black'>
                {currentData.map((item) => (
                    <tr key={item.no} style={{ backgroundColor: '#ffffff' }}>
                      <td style={tableDataStyle}>{item.no}</td>
                      <td style={tableDataStyle}>{item.kodePasien}</td>
                      <td style={tableDataStyle}>{item.umur}</td>
                      <td style={tableDataStyle}>{item.jenisKelamin}</td>
                      <td style={tableDataStyle}>{item.alamat}</td>
                      <td style={tableDataStyle}>{item.pengobatanTerakhir}</td>
                      <td style={tableDataStyle}>
                        <button className='bg-[#35B438] text-white' onClick={() => handleDetailClick(item.id)} style={{ width: '80px', height: '35px', fontSize: '13px', borderRadius: '10px' }}>Lihat Detail</button>
                      </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      
      <div className='flex justify-center text-black mb-10' style={paginationStyle}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={buttonStyle}
        >
          &lt;
        </button>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          style={buttonStyle}
        >
          &gt;
        </button>
      </div>
      <div className='flex justify-center mt-10 mb-10'>
          <button
            className='bg-[#35B438] text-white mb-2'
            onClick={() => navigate('/dashboard')}
            style={{ width: '150px', height: '35px', fontSize: '13px', borderRadius: '5px' }}
          >
            Kembali ke Dashboard
          </button>
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
  

};

// Gaya untuk tombol pagination
const buttonStyle = {
  padding: '2px 10px',
  margin: '0 2px',
  border: '1px solid black',
  backgroundColor: 'white',
  color:'blue',
  cursor: 'pointer',
};

export default TableDet;