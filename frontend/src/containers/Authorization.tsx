import React, { useEffect, useState } from "react";
import axios from 'axios';
import AuthorizationsTable from '../components/tables/AuthorizationsTable';
import IAuthorization from '../interfaces/IAuthorization';

const Calories = () => {

  const [authorization, setAuthorization] = useState<any>([]);
  const [roles, setRoles] = useState<any>([])
  const [usersRolesPermisssions, setUsersRolesPermisssions] = useState<any>([])  

  const fetchAuthorization = async (): Promise<void> => {
    try {
      const response = await axios.get('users');
      setAuthorization(response.data);  
    } catch(error) {
      console.log(error);
    }
  };

  const fetchRoles = async (): Promise<void> => {
    try {
      const response = await axios.get('roles');
      setRoles(response.data);  
    } catch(error) {
      console.log(error);
    }
  };  

  const fetchUsersRolesPermissions = async (): Promise<void> => {
    try {
      const response = await axios.get('users_roles_permissions');
      setUsersRolesPermisssions(response.data);  
    } catch(error) {
      console.log(error);
    }
  };    

  useEffect(() => {
    fetchAuthorization();
    fetchRoles();
    fetchUsersRolesPermissions();
  }, [])

  let authorizationTable = <p>Loading....</p>;

  if(authorization) {
    authorizationTable = <AuthorizationsTable rows={authorization} roles={roles} usersRolesPermisssions={usersRolesPermisssions} />;
  }

  return (
   <React.Fragment>
    {authorizationTable}
   </React.Fragment>
  );
}

export default Calories;
