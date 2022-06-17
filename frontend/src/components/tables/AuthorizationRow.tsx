import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import IHistory from '../../interfaces/IHistory';
import IAuthorization from '../../interfaces/IAuthorization';
import PermissionRow from './PermissionRow';

import axios from 'axios';

interface Props {
  row: any,
  roles: any,
  usersRolesPermisssions: any
}

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const userRolePermission = (userId: number, roleId: number, permissionId: number, usersRolesPermisssions: any): any => {
  let i: number;
  if(usersRolesPermisssions) {
    for(i=0; i<usersRolesPermisssions.length; i++ ) {
      if(usersRolesPermisssions[i].user_id == userId && usersRolesPermisssions[i].role_id == roleId && usersRolesPermisssions[i].permission_id == permissionId) {
        return true;
      }  
    }
  }
  return false;
};


const AuthorizationRow = ({row, roles, usersRolesPermisssions}: Props) => {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const submitHandler = (e: any, userId: number, roleId: number, permissionId: number) => {
    const value = e.target.textContent.search("Attach");

    if(value == 0) {
      attachPermission(userId, roleId, permissionId);
    } else {
      detachPermission(userId, roleId, permissionId);
    }
    
  }

  const attachPermission = async (userId: number, roleId: number, permissionId: number): Promise<void> => {
    try {
      await axios.post(`attach_user_role_permission/${userId}/${roleId}/${permissionId}`);
    } catch (error) {
      console.log(error);
    }
  };  

  const detachPermission = async (userId: number, roleId: number, permissionId: number): Promise<void> => {
    try {
      await axios.post(`detach_user_role_permission/${userId}/${roleId}/${permissionId}`);
    } catch (error) {
      console.log(error);
    }
  };   


  const roles_item = roles.map((role: any) => {


    const createResponse = userRolePermission(row.id, role.id, 1, usersRolesPermisssions);
    const readResponse = userRolePermission(row.id, role.id, 2, usersRolesPermisssions);
    const updateResponse = userRolePermission(row.id, role.id, 3, usersRolesPermisssions);
    const removeResponse = userRolePermission(row.id, role.id, 4, usersRolesPermisssions);            

    let create = <Button variant="contained" color="primary" value="attach" onClick={(e) => submitHandler(e, row.id, role.id, 1)}>Attach Create</Button>;
    if(createResponse) {
      create = <Button variant="contained" color="secondary" value="detach" onClick={(e) => submitHandler(e, row.id, role.id, 1)}>Detach Create</Button>;
    }

    let read = <Button variant="contained" color="primary" value="attach"  onClick={(e) => submitHandler(e, row.id, role.id, 2)}>Attach Read</Button>;
    if(readResponse) {
      read = <Button variant="contained" color="secondary" value="detach" onClick={(e) => submitHandler(e, row.id, role.id, 2)}>Detach Read</Button>;
    }    

    let update = <Button variant="contained" color="primary" value="detach" onClick={(e) => submitHandler(e, row.id, role.id, 3)}>Attach Update</Button>;
    if(updateResponse) {
      update = <Button variant="contained" color="secondary" value="detach" onClick={(e) => submitHandler(e, row.id, role.id, 3)}>Detach Update</Button>;
    }     

    let remove = <Button variant="contained" color="primary" value="detach" onClick={(e) => submitHandler(e, row.id, role.id, 4)}>Attach Remove</Button>;
    if(removeResponse) {
      remove = <Button variant="contained" color="secondary" value="detach" onClick={(e) => submitHandler(e, row.id, role.id, 4)}>Detach Remove</Button>;
    } 

    return (
     <TableRow key={role.id}>
      <TableCell style={{color: 'white'}}>{role.role_name}</TableCell>
      <TableCell style={{color: 'white'}}>{create}</TableCell>  
      <TableCell style={{color: 'white'}}>{read}</TableCell>          
      <TableCell style={{color: 'white'}}>{update}</TableCell>
      <TableCell style={{color: 'white'}}>{remove}</TableCell>                                                                                                                      
    </TableRow>
    );  
  });

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton style={{backgroundColor: 'white'}}  aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{color: 'white'}} component="th" scope="row">
          {row.first_name}
        </TableCell>
        <TableCell style={{color: 'white'}} align="right">{row.last_name}</TableCell>
        <TableCell style={{color: 'white'}} align="right">{row.email}</TableCell>
      </TableRow>
      <TableRow>       
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
              
                    <TableCell style={{color: 'white'}}>Role</TableCell>
              
                    <TableCell style={{color: 'white'}}>Create</TableCell>
               
                    <TableCell style={{color: 'white'}}>Read</TableCell>
              
                    <TableCell style={{color: 'white'}}>Update</TableCell>
           
                    <TableCell style={{color: 'white'}}>Remove</TableCell>                                                             
                </TableHead>
                <TableBody>
                  {roles_item}
                </TableBody> 
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default AuthorizationRow;
