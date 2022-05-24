import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ClientList() {
  const [clients, setClients] = React.useState([]);

  const url = "https://fakerapi.it/api/v1/companies?_quantity=1";

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())

      .then((data) => setClients(data.data));
  }, []);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Image</TableCell>
            <TableCell className="tableCell">Full Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Phone</TableCell>
            <TableCell className="tableCell">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients
            ? clients?.map((client, idx) => (
                <TableRow key={idx}>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img src={client.img} alt="" className="image" />
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">
                    <span>{client.firstname}</span>
                    <span> {client.lastname}</span>
                  </TableCell>
                  <TableCell className="tableCell">{client.email}</TableCell>
                  <TableCell className="tableCell">{client.phone}</TableCell>
                  <TableCell className="tableCell">{client.gender}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ClientList;
