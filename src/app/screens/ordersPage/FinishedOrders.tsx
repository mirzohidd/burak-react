import React from "react";
import { Stack, Box } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retriverFinishedOrders } from "./selector";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { Order, OrderItem } from "../../../lib/types/orders";

const popularDishesRetriever = createSelector(
  retriverFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);
export default function FinishedOrders() {
  const { finishedOrders } = useSelector(popularDishesRetriever);

  return (
    <TabPanel value="3">
      <Stack>
        {/* number of orders */}
        {finishedOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className="order-main-box">
              <Box className="order-box-scroll">
                {/* number of items in each order */}
                {order?.orderItems.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;

                  return (
                    <Box key={item._id} className="orders-name-price">
                      <Stack className="order-dish-class">
                        <img src={imagePath} className="order-dish-img" />
                        <p className="title-dish">{product.productName}</p>
                      </Stack>
                      <Stack className="price-box">
                        <p>${item.itemPrice}</p>
                        <img src="/icons/close.svg" />
                        <p>{item.itemQuantity}</p>
                        <img src="/icons/pause.svg" />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemQuantity * item.itemPrice}
                        </p>
                      </Stack>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total-price-box">
                <Box className="box-total">
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "20px" }} />
                  <p> Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img src="/icons/pause.svg" style={{ marginLeft: "20px" }} />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
              </Box>
            </Box>
          );
        })}

        {!finishedOrders ||
          (finishedOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}>
              <img
                src="/icons/noimage-list.svg"
                style={{ width: 300, height: 300 }}
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
