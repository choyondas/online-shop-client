import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);

  return (
    <div>
      <h2>payment comming soon for: {order.productName} </h2>
      <h4>pay: ${order.price}</h4>
    </div>
  );
};

export default Payment;
