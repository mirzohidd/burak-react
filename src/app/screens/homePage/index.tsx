import React, { useEffect } from "react";
// import
import { Container } from "@mui/material";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import Statistics from "./Statistics";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

import { setPopularDishes } from "./slice";
import { retrivePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const populsrDishesRetriever = createSelector(
  retrivePopularDishes,
  (popularDishes) => ({
    popularDishes,
  })
);
export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(populsrDishesRetriever);
  // Selector : Store = Data
  useEffect(() => {
    // Backend server data request =>Data
    const result = [
      {
        _id: "679b763f85c71fb8dd3d7371",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Kebab",
        productPrice: 12,
        productLeftCount: 12,
        productSize: "LARGE",
        productVolume: 1,
        productDesc: "Kebab",
        productImages: [
          "uploads/products/0914e9a9-f982-4ff5-b827-b58a0f29e7be.jpeg",
        ],
        productView: 0,
        createdAt: "2025-01-30T12:53:19.479Z",
        updatedAt: "2025-01-30T12:53:56.885Z",
        __v: 0,
      },
      {
        _id: "679b755665e50e8a1c50bc45",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Steak",
        productPrice: 14,
        productLeftCount: 123123,
        productSize: "LARGE",
        productVolume: 1,
        productDesc: "adasdsadsad",
        productImages: [
          "uploads/products/98c5b2bd-3772-4783-87ee-6fad3412dd85.jpg",
        ],
        productView: 0,
        createdAt: "2025-01-30T12:49:26.122Z",
        updatedAt: "2025-01-30T13:44:49.457Z",
        __v: 0,
      },
      {
        _id: "679b765a85c71fb8dd3d7374",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Pizza",
        productPrice: 20,
        productLeftCount: 12,
        productSize: "SET",
        productVolume: 1,
        productDesc: "PizzaPizzaPizzaPizza",
        productImages: [
          "uploads/products/cfb2beeb-e119-4f3b-be38-161c64801fe0.jpg",
        ],
        productView: 1,
        createdAt: "2025-01-30T12:53:46.084Z",
        updatedAt: "2025-01-30T14:16:49.040Z",
        __v: 0,
      },
    ];
    // slice: Data => Store
    // @ts-ignore
    setPopularDishes(result);
  }, []);

  console.log("populsrDishesRetriever", popularDishes);
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
