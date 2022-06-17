import IRole  from '../../interfaces/IRole';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface Props {
  roles: IRole[]
}

const UsersTable = ({roles} : Props) => {

  const useStyles = makeStyles({
    table: {
      minWidth: 450,
    },
  });  

  const classes = useStyles();

  return (
    <div style={{marginTop: '20px', marginLeft: '100px', marginRight: '750px'}}>
    {roles &&  
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell component="th" scope="row">
              {role.role_name}
              </TableCell>
              <TableCell component="th" scope="row">
                <button>Edit</button>
              </TableCell>   
              <TableCell component="th" scope="row">
                <button>Remove</button>
              </TableCell>                           
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
