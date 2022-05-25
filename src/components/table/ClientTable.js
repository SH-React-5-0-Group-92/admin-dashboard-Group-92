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

  const url = "https://fakerapi.it/api/v1/companies?_quantity=3";

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setClients(data.data));
  }, []);
  console.log(clients);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
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
                <TableRow 
                key={idx}>
                  <TableCell className="tableCell">{client.id}</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img src={client.image} alt="" className="image" />
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">
                    <span>{client.contact.firstname}</span>
                    <span> {client.contact.lastname}</span>
                  </TableCell>
                  <TableCell className="tableCell">{client.email}</TableCell>
                  <TableCell className="tableCell">{client.phone}</TableCell>
                  <TableCell className="tableCell">
                    {client.contact.gender}
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ClientList;
