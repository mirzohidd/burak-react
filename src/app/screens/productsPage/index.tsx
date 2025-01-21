import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChoosenProduct from "./ChoosenProduct";
import Products from "./Products";
import "../../../css/products.css"

// import ChoosenProduc from "cho"
export default function ProductsPage() {
  const products = useRouteMatch();
  console.log(products);
  return (
    <div className={"products-page"}>
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChoosenProduct />
        </Route>
        <Route path={`${products.path}`}>
          <Products />
        </Route>
      </Switch>
    </div>
  );
}
