import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import AuthorizationRow from './AuthorizationRow';
import IHistory from '../../interfaces/IHistory';
import IAuthorization from '../../interfaces/IAuthorization';

interface Props {
  rows: any,
  roles: any,
  usersRolesPermisssions: any,
}

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

// const historyData: IHistory[] = [
//   { date: '2020-01-05', customerId: <button>Edit</button>, amount: 3 },
//   { date: '2020-01-02', customerId: <button>Edit</button>, amount: 1 }, 
// ];

// const rows: IAuthorization[] = [
//   {name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, price: 3.99, history: historyData},
//   {name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, price: 4.99, history: historyData},  
//   {name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0, price: 3.79, history: historyData},  
//   {name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, price: 2.5, history: historyData},  
//   {name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, price: 1.5, history: historyData},        
// ];

const PermissionsTable = ({rows, roles, usersRolesPermisssions}: Props) => {
  return (
    <div style={{marginTop: '20px', marginLeft: '100px', marginRight: '100px'}}>
      <TableContainer component={Paper} style={{backgroundColor: '#343a40', color: 'white'}}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell style={{color: 'white'}}>First Name</TableCell>
              <TableCell style={{color: 'white'}} align="right">Last Name</TableCell>
              <TableCell style={{color: 'white'}} align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: IAuthorization) => (
              <AuthorizationRow key={row.last_name} row={row} roles={roles} usersRolesPermisssions={usersRolesPermisssions} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PermissionsTable;
