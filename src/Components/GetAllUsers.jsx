// import React, { useEffect } from "react";
// import { getAllUsers } from "../Api/axios.Config";

// const GetAllUsers = ({ users, setUsers, showUsers }) => {
//   useEffect(() => {
//     if (showUsers) {
//       // console
//       getAllUsers()
//         .then((response) => {
//           // response.json()
//           console.log(response.data);
//           setUsers(response.data);
//         })
//         // .then((data) => console.log(data))
//         .catch((err) => console.log(err));
//     }
//   }, [showUsers, setUsers]);
//   return (
//     <>
//       {{ showUsers } && (
//         users.map((e) => {
//             <div className="p-4 sm:ml-64">
//               <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
//                 <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">

//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}
//         }
//     </>
//   );
// };

// export default GetAllUsers;

import React, { useEffect } from "react";
import { getAllUsers } from "../Api/axios.Config";

const GetAllUsers = ({ users, setUsers, showUsers }) => {
  useEffect(() => {
    const getUsers = () => {
      if (showUsers) {
        getAllUsers()
          .then((response) => {
            setUsers(response.data);
            console.log(response.data);
          })
          .catch((err) => console.log(err));
      }
    };
    getUsers();
  }, []);

  return (
    <>
      {showUsers && (
        <div>
          {users &&
            users.map(
              (user) =>
                user.role === "user" && (
                  <div key={user.id} className="p-4 sm:ml-64">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                          {user.email}{" "}
                          {/* Adjust this according to your user data */}
                        </p>
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
      )}
    </>
  );
};

export default GetAllUsers;
