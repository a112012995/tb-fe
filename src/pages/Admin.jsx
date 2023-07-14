import React, { useState} from 'react';
import Footer from "../components/Footer";

const data = [
    { No: 1, Username: 'Perawat', StatusUser: 'Aktif' },
    { No: 2, Username: 'EPID', StatusUser: 'Tidak Aktif' },
    { No: 3, Username: 'Petugas Lab', StatusUser: 'Aktif' },
];

const itemsPerPage = 10;
const AdminPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState(data);
    const [switchStatus, setSwitchStatus] = useState({});
    
    const handleDeleteUser = (userNo) => {
        // Menghapus pengguna dari array dan mengupdate state users
        setUsers(prevUsers => prevUsers.filter(user => user.No !== userNo));
    }
    const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    };
    
    const handleSwitchStatus = (userNo) => {
        setSwitchStatus(prevStatus => {
            const updatedStatus = { ...prevStatus };
            updatedStatus[userNo] = !updatedStatus[userNo]; // Toggle the status
        
            return updatedStatus;
          });
        
          setUsers(prevUsers => {
            const updatedUsers = prevUsers.map(user => {
              if (user.No === userNo) {
                return {
                  ...user,
                  StatusUser: switchStatus[userNo] ? 'Tidak Aktif' : 'Aktif',
                };
              }
              return user;
            });
        
            return updatedUsers;
        });
        
    };
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = users.slice(startIndex, endIndex);


  return (
    <div className='relative bg-white'>
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
                    <a href="login" className="text-2xl font-semibold scroll-smooth">
                    logout
                    </a>
                    
                </div>
            </div>
        </div>
        <div className='flex justify-center mt-20 mb-5'>
            <table style={{ borderCollapse: 'collapse', width: '1000px' }}>
                <thead>
                    <tr className='text-white' style={{ backgroundColor: '#030C5A' }}>
                    <th style={tableHeaderStyle}>No</th>
                    <th style={tableHeaderStyle}>Username</th>
                    <th style={tableHeaderStyle}>Status User</th>
                    <th style={tableHeaderStyle}></th>
                    <th style={tableHeaderStyle}>Aksi</th>
                    </tr>
                </thead>
                <tbody className='text-black'>
                    {currentData.map(user => (
                    <tr key={user.No}>
                        <td style={tableDataStyle}>{user.No}</td>
                        <td style={tableDataStyle}>{user.Username}</td>
                        <td style={tableDataStyle}>{user.StatusUser}</td>
                        <td style={tableBtDataStyle}> 
                        <input 
                        type="checkbox"
                        className="toggle"
                        checked={switchStatus[user.No]}
                        onChange={() => handleSwitchStatus(user.No)}
                        style={
                            switchStatus[user.No]
                            ? switchInputActiveStyle
                            : switchInputInactiveStyle
                        }
                        />
                        </td>
                        <td style={tableDataStyle}>
                        <button className='bg-[#35B438] text-white' onClick={() => handleDeleteUser(user.No)}>
                            Hapus
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div className='text-black mb-10' style={paginationStyle}>
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
        
        <div>
            <Footer></Footer>
        </div>
    
    </div>
) 
};
  
const switchInputStyle = {
    // ...
    transform: 'translateX(-100%)',
};
  

const switchInputActiveStyle = {
    ...switchInputStyle,
    backgroundColor: 'green',
 };
  
const switchInputInactiveStyle = {
    ...switchInputStyle,
    backgroundColor: 'red',
};

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

const tableBtDataStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    position: 'relative',
};


  
const paginationStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
    marginRight: '170px',
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

export default AdminPage;