import React from "react";

import "../css/App.css";
import { Container, Stack, Box, Typography, Button } from "@mui/material";
import { Link, Route, Switch } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home - Page</Link>
          </li>
          <li>
            <Link to="/products">Products - Page</Link>
          </li>
          <li>
            <Link to="/orders">Orders - Page</Link>
          </li>
          <li>
            <Link to="/member-page">User- Page</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/products">
          <ProductsPage></ProductsPage>
        </Route>
        <Route path="/orders">
          <OrdersPage></OrdersPage>
        </Route>
        <Route path="/user">
          <UserPage></UserPage>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
