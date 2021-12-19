import React, { useEffect, useState } from "react";
import useAuth from "./../../../Hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // handle delete function
  // handle delete function
  const handleDelUser = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainUser = orders.filter((order) => order._id !== id);
            setOrders(remainUser);
          }
        });
    }
  };

  return (
    <div>
      <h2>all your orders:{orders.length}</h2>

      <TableContainer component={Paper}>
        <Table aria-label="Orders table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              {/* <TableCell align="right">Customer Email</TableCell> */}
              <TableCell>Product Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.productId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{order.username}</TableCell>

                <TableCell>{order.productName}</TableCell>
                <TableCell>{order.address}</TableCell>
                <TableCell>{order.phone}</TableCell>
                
                <TableCell>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelUser(order._id)}
                  >
                    Delete
                  </button>
                </TableCell>

                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrders;
