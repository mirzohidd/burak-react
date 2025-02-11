import HomePage from ".";
import { AppRootState } from "./../../../lib/types/screen";
import { createSelector } from "reselect";

const selectHomePage = (state: AppRootState) => state.homePage;
export const retrivePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes
);

export const retriveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes
);

export const retriverTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);
