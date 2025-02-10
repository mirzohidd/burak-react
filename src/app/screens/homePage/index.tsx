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

export default function HomePage() {
  // Selector : Store = Data
  useEffect(() => {
    // Backend server data request =>Data



    // slice: Data => Store
  }, []);
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
