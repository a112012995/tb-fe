import React, { useState } from "react";
import Navbar from "./AdminComponent/Navbar";
import Sidebar from "./AdminComponent/Sidebar";
import UserList from "./AdminComponent/UserList";

const Admin = () => {
  const [open, setOpen] = useState(true);
  const [users, setUsers] = useState(true);
  const [pkp, setPkp] = useState(false);

  const compUsers = () => {
    setUsers(true);
    setPkp(false);
  };

  const compPkp = () => {
    setUsers(false);
    setPkp(true);
  };
  return (
    <div className="text-black">
      <Navbar opens={open} setOpens={setOpen} />
      <div className="flex h-auto bg-white">
        <Sidebar
          opens={open}
          compUsers={compUsers}
          compPkp={compPkp}
          users={users}
          pkp={pkp}
        />
        <div className="w-full border-l-2 h-full min-h-screen">
          <div className="px-10 mt-24">{users && <UserList />}</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
