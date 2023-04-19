import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./styles/index.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import produtsReducer, { productsFetch } from "./features/productSlice";
import { productsApi } from "./features/productsApi";
import cartReducer, { getTotals } from "./features/cartSlice";

const store = configureStore({
  reducer: {
    products: produtsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
