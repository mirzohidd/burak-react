import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageState } from "../../../lib/types/screen";
import exp from "constants";

const initialState: ProductsPageState = {
  restaurant: null,
  chosenProduct: null,
  products: [],
};

const productsPgaeSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    serProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
export const { setRestaurant, setChosenProduct, serProducts } =
  productsPgaeSlice.actions;

const ProductsPageReducer = productsPgaeSlice.reducer;

export default ProductsPageReducer;
