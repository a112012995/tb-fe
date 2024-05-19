import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUser } from "../../store/actions/admin";
import { jwtDecode } from "jwt-decode";
import edit from "../../assets/edit.svg";
import deleted from "../../assets/delete.svg";
import ModalAdd from "./ModalAdd";
import Swal from "sweetalert2";

const UserList = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [token, setToken] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.adminReducers);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(getAllUser());
    setToken(jwtDecode(accessToken));
  }, [dispatch, accessToken]);

  useEffect(() => {
    if (data && data.user) {
      setUsers(data.user);
    }
  }, [data]);

  const handleDeleteUser = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(userId));
        setUsers(users.filter((user) => user.id !== userId)); // Update local state
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <p className="text-2xl font-bold text-[#4F709C]">Daftar Pengguna</p>
        <ModalAdd />
      </div>
      <div className="overflow-x-auto">
        <table className="table mt-4">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Username</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>
                  <p className="font-semibold">{user.username}</p>
                </td>
                <td>{user.role}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {/* <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <img src={edit} alt="" />
                    </button> */}

                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <img src={deleted} alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
