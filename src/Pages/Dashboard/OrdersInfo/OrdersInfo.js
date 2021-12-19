import * as React from "react";
import { Grid } from "@mui/material";

import MyOrders from "../MyOrders/MyOrders";

const OrdersInfo = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid>
          <MyOrders></MyOrders>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrdersInfo;
