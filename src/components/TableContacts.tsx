import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(avatar: string, fullname: string, birthday: number, email: number, phone: number, location: number, nationality: string) {
  return { avatar, fullname, birthday, email, phone, location, nationality };
}

const rows = [
  createData("/static/images/avatar/1.jpg",'Frozen yoghurt', 159, 6.0, 24, 4.0, 'minsk'),
  createData("avatar",'Frozen yoghurt', 159, 6.0, 24, 4.0, 'minsk'),
  createData("avatar",'Frozen yoghurt', 159, 6.0, 24, 4.0, 'minsk'),
  createData("avatar",'Frozen yoghurt', 159, 6.0, 24, 4.0, 'minsk'),
  createData("avatar",'Frozen yoghurt', 159, 6.0, 24, 4.0, 'minsk'),
  createData("avatar",'Frozen yoghurt', 159, 6.0, 24, 4.0, 'minsk'),
  createData("avatar",'Frozen yoghurt', 159, 6.0, 24, 4.0, 'minsk'),
  createData("avatar",'Frozen yoghurt', 159, 6.0, 24, 4.0, 'minsk'),
  createData("avatar",'Frozen yoghurt', 159, 6.0, 24, 4.0, 'minsk'),
  createData("avatar",'Frozen yoghurt', 159, 6.0, 24, 4.0, 'minsk'),
  createData("avatar",'Frozen yoghurt', 159, 6.0, 24, 4.0, 'minsk'),
];

const TableContacts = () => {
    const classes = useStyles();
    return (
        <div>
             <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>FullName</TableCell>
            <TableCell align="right">Birthday</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.fullname}>
              <TableCell align="right">
              <Avatar alt="Remy Sharp" src={row.avatar} />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.fullname}
              </TableCell>
              <TableCell align="right">{row.birthday}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.nationality}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default TableContacts
