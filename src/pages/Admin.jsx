import React, { useState } from "react";
import Navbar from "./AdminComponent/Navbar";
import Sidebar from "./AdminComponent/Sidebar";
import UserList from "./AdminComponent/UserList";
import Pkp from "./AdminComponent/Pkp";
import Survey from "./AdminComponent/Survey";

const Admin = () => {
  const [open, setOpen] = useState(true);
  const [users, setUsers] = useState(true);
  const [pkp, setPkp] = useState(false);
  const [survey, setSurvey] = useState(false);

  const compUsers = () => {
    setUsers(true);
    setPkp(false);
    setSurvey(false);
  };

  const compPkp = () => {
    setUsers(false);
    setPkp(true);
    setSurvey(false);
  };
  const compSurvey = () => {
    setUsers(false);
    setPkp(false);
    setSurvey(true);
  };
  return (
    <div className="text-black">
      <Navbar opens={open} setOpens={setOpen} />
      <div className="flex h-auto bg-white">
        <Sidebar
          opens={open}
          compUsers={compUsers}
          compPkp={compPkp}
          compSurvey={compSurvey}
          users={users}
          pkp={pkp}
          survey={survey}
        />
        <div className="w-full border-l-2 h-full min-h-screen">
          <div className="px-10 mt-24">
            {users && <UserList />}
            {pkp && <Pkp />}
            {survey && <Survey />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
