import React, { useEffect, useState } from "react";
import axios from 'axios';
import DisplayTable from '../components/tables/UsersTable';
import IUser from '../interfaces/IUser';

const Users = () => {

  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await axios.get('users');
      setUsers(response.data);  
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [])

  let userTable = <p>Loading....</p>;

  if(users) {
    userTable = <DisplayTable users={users} />
  }


  // const userList: IUser[] = [
  //   {id: 1, first_name: 'Rafael', last_name: 'nadal', email: 'rafaelnadal@gmail.com'}
  // ];

  // useEffect( () => {
  //   setUsers(userList);
  // }, []) 


  return (
   <React.Fragment>
    {userTable}
   </React.Fragment>
  );
}

export default Users;
