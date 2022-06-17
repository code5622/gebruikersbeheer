import IUser from '../../interfaces/IUser';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface Props {
  users: IUser[]
}

const UsersTable = ({users} : Props) => {

  const useStyles = makeStyles({
    table: {
      minWidth: 450,
    },
  });  

  const classes = useStyles();

  return (
    <div style={{marginTop: '20px', marginLeft: '100px', marginRight: '750px'}}>
    {users &&  
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
              {user.first_name}
              </TableCell>
              <TableCell align="right">{user.last_name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    }    
    </div>  
  );
};

export default UsersTable;
