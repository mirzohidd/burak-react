import { AppRootState } from "./../../../lib/types/screen";
import { createSelector } from "reselect";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;
export const retrivePausedOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.pausedOrders
);

export const retriveProcessOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.processOrders
);

export const retriverFinishedOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.finishedOrders
);
