import React from "react";

const Clients = () => {
  const [clients, setClients] = React.useState([]);

  const url = "https://fakerapi.it/api/v1/companies?_quantity=1";

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setClients(data.data));
  }, []);

  return (
    <div className="clients">
      <div className="clients-table">
        <div className="client-table-main">
          <table>
            <thead>
              <tr>
                <th> Full Name</th>
                <th> Email</th>
                <th> Phone No</th>
                <th> Gender</th>
                <th> Image</th>
              </tr>
            </thead>

            <tbody>
              {clients
                ? clients?.map((client, idx) => (
                    <tr key={idx}>
                      <td>
                        <p>
                          <span>{client.firstname}</span>
                          <span> {client.lastname}</span>
                        </p>
                      </td>
                      <td> {client.email}</td>
                      <td> {client.phone}</td>
                      <td> {client.gender}</td>
                      <td> {client.image}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clients;
