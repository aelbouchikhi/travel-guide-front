import { useState } from "react";
import { DefaultSidebar } from "../Components/DefaultSidebar";
import GetAllUsers from "../Components/GetAllUsers";

const Dashboard = () => {
  const [users, setAllUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  return (
    <>
      <DefaultSidebar setShowUsers={setShowUsers} showUsers={showUsers} />
      {showUsers ? (
        <GetAllUsers
          users={users}
          setUsers={setAllUsers}
          showUsers={showUsers}
        />
      ) : (
        <span>Nothing</span>
      )}
    </>
  );
};

export default Dashboard;
