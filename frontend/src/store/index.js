import { configureStore } from "@reduxjs/toolkit";
import carInventory from "./slices/CarInventory";
export default configureStore({
  reducer: {
    carInventory,
  },
});
