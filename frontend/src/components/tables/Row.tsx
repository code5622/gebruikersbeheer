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
import IData from '../../interfaces/IData';

interface Props {
  row: IData
}

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const Row = ({row}: Props) => {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton style={{backgroundColor: 'white'}}  aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{color: 'white'}} component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell style={{color: 'white'}} align="right">{row.calories}</TableCell>
        <TableCell style={{color: 'white'}} align="right">{row.fat}</TableCell>
        <TableCell style={{color: 'white'}} align="right">{row.carbs}</TableCell>
        <TableCell style={{color: 'white'}} align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                HistoryXXX
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{color: 'white'}}>Date</TableCell>
                    <TableCell style={{color: 'white'}}>Customer</TableCell>
                    <TableCell style={{color: 'white'}} align="right">Amount</TableCell>
                    <TableCell style={{color: 'white'}} align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow: IHistory) => (
                    <TableRow key={historyRow.date}>
                      <TableCell style={{color: 'white'}} component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell style={{color: 'white'}} >{historyRow.customerId}</TableCell>
                      <TableCell style={{color: 'white'}} align="right">{historyRow.amount}</TableCell>
                      <TableCell style={{color: 'white'}} align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Row;
