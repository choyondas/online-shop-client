import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import OrdersInfo from "../OrdersInfo/OrdersInfo";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import Pay from "../../Pay/Pay";
import useAuth from "../../../Hooks/useAuth";
import Review from "../../Review/Review";
import Manager from "./Manager/Manager";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";

const drawerWidth = 240;

function Dashboard(props) {
  const { admin } = useAuth();
  const { user, logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="container  ">
      <Toolbar />

      <Divider />

      {admin && (
        <Box>
          <Link to={`${url}`}>
            <Button variant="contained"> Dashboard</Button>
          </Link>
          <br />
          <br />
          <Link to={`${url}/makeAdmin`}>
            <Button variant="contained"> Make Admin</Button>
          </Link>

          <br />
          <br />
          <Link to={`${url}/addProduct`}>
            <Button variant="contained">Add Products</Button>
          </Link>
          <br />
          <br />

          <Link to={`${url}/manageOrders`}>
            <Button variant="contained">Manage Orders</Button>
          </Link>
          <br />
          <br />

          <Link to={`${url}/manageProducts`}>
            <Button variant="contained">Manage Products</Button>
          </Link>
          <br />
          <br />
        </Box>
      )}

      {!admin && (
        <Box>
          <br />
          <br />
          <Link to={`${url}`}>
            <Button variant="contained"> Dashboard</Button>
          </Link>
          <br />
          <br />
          <Link to="/">
            <Button variant="contained"> Home Page</Button>
          </Link>
          <br />
          <br />
          <Link to={`${url}/pay`}>
            <Button variant="contained">Pay</Button>
          </Link>
          <br />
          <br />
          <Link to={`${url}/ordersInfo`}>
            <Button variant="contained">My Orders</Button>
          </Link>

          <br />
          <br />
          <Link to={`${url}/review`}>
            <Button variant="contained">Review</Button>
          </Link>
          {/* <br />
          <br />
          <Link to={`/`}>
            <Button variant="contained">Home</Button>
          </Link> */}
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "#4c92f7" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>

          <div style={{ marginLeft: "40%" }}>
            {user?.email && (
              <Box className="d-flex">
                <button className="btn btn-primary"> {user.displayName}</button>

                <Button
                  type="button"
                  className="btn btn-danger"
                  onClick={logout}
                  color="inherit"
                >
                  Logout
                </Button>
              </Box>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <Manager></Manager>
          </Route>
          <Route  path={`${path}/payment:id`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/ordersInfo`}>
            <OrdersInfo></OrdersInfo>
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/manageOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
