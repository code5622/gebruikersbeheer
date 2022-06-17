import React from 'react';
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

// interface Props {
//   row: any,
//   roles: any
// }

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const PermissionnRow = () => {
  return (
    <Table size="small" aria-label="purchases">
      <TableBody>
          <TableRow>
            <TableCell style={{color: 'white'}} >Create Permission </TableCell>
            <TableCell style={{color: 'white'}} >Read Permission </TableCell>
            <TableCell style={{color: 'white'}} >Update Permission/TableCell </TableCell>   
            <TableCell style={{color: 'white'}} >Remove Permission/TableCell </TableCell>                                            
          </TableRow>
      </TableBody> 
    </Table>
  );
}

export default PermissionnRow;
