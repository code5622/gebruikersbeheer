import React, { useEffect, useState } from "react";
import axios from 'axios';
import RolesTable from '../components/tables/RolesTable';
import IRole from '../interfaces/IRole';

const Roles = () => {

  const [roles, setRoles] = useState<IRole[]>([]);

  const fetchRoles = async (): Promise<void> => {
    try {
      const response = await axios.get('roles');
      setRoles(response.data);  
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, [])

  let roleTable = <p>Loading....</p>;

  if(roles) {
    roleTable = <RolesTable roles={roles} />
  }

  return (
   <React.Fragment>
    {roleTable}
   </React.Fragment>
  );
}

export default Roles;
