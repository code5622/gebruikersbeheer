import React, { useEffect, useState } from "react";
import axios from 'axios';
import CaloriesTable from '../components/tables/CaloriesTable';
//import IUser from '../interfaces/IUser';

const Calories = () => {

  // const [users, setUsers] = useState<IUser[]>([]);

  // const fetchUsers = async (): Promise<void> => {
  //   try {
  //     const response = await axios.get('users');
  //     setUsers(response.data);  
  //   } catch(error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, [])

  // let userTable = <p>Loading....</p>;

  // if(users) {
  //   userTable = <DisplayTable users={users} />
  // }




  return (
   <React.Fragment>
    <CaloriesTable />
   </React.Fragment>
  );
}

export default Calories;
