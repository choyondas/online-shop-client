import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://stark-reaches-58520.herokuapp.com/orders/all")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // handle delete function
  const handleDelorder = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      const url = `https://stark-reaches-58520.herokuapp.com/orders/all/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");

            const remainorder = orders.filter((order) => order._id !== id);
            setOrders(remainorder);
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

              <TableCell>Product Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              {/* <TableCell>Payment</TableCell> */}
              <TableCell></TableCell>
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
                    onClick={() => handleDelorder(order._id)}
                  >
                    Delete
                  </button>
                </TableCell>
                <TableCell>
                  <Link to={`/orders/update/${order._id}`}>
                    <button className="btn btn-primary">update</button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageAllOrders;
