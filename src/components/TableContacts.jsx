import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../store/actions";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableContacts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  const contacts = useSelector((state) => state.main.items.results);
  console.log(contacts);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
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
          {contacts.map((contact, index) => (
              <TableRow key={index}>
                <TableCell align="right">
                  <Avatar alt="Remy Sharp" src={contact.picture.large} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {}
                </TableCell>
                <TableCell align="right">{}</TableCell>
                <TableCell align="right">{}</TableCell>
                <TableCell align="right">{}</TableCell>
                <TableCell align="right">{}</TableCell>
                <TableCell align="right">{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableContacts;
