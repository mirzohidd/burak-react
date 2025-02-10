import HomePage from ".";
import { AppRootState } from "./../../../lib/types/screen";
import { createSelector } from "reselect";

const selectHomePage = (state: AppRootState) => state.homePage;
const retrivePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes
);

const retriveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes
);

const retriverTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);
