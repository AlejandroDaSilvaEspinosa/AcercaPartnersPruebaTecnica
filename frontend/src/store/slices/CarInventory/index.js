import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getCarInventory from "../../../services/CarInventory/getCarInventory";
import postDeleteCar from "../../../services/CarInventory/postDeleteCar";
import postAddCar from "../../../services/CarInventory/postAddCar";
import postUpdateCar from "../../../services/CarInventory/postUpdateCar";

const initialState = {
  rows: [],
  total: 0,
  status: "idle",
  error: null,
  selectedRow: {
    chassisNumber: "",
    orderNumber: 0,
    model: "",
    deliveryDate: Date.now(),
    licensePlate: "",
  },
  modalOpen: false,
};

export const fetchCartInventory = createAsyncThunk(
  "carInventory/fetchCarInventory",
  async (pageState) => {
    const { page, pageSize } = pageState;
    return await getCarInventory(page, pageSize);
  }
);

export const deleteCar = createAsyncThunk(
  "carInventory/deleteCar",
  async (id) => {
    await postDeleteCar(id);
    return await getCarInventory();
  }
);

export const addUpdateCar = createAsyncThunk(
  "carInventory/addUpdateCar",
  async (car) => {
    if (!car.id || car.id === 0) {
      car.deliveryDate = new Date(car.deliveryDate).toISOString();
      await postAddCar({ id: "", ...car });
    } else {
      await postUpdateCar(car);
    }
    return await getCarInventory();
  }
);

export const carInventorySlice = createSlice({
  name: "carInventory",
  initialState: initialState,
  reducers: {
    closeModal: (state) => {
      state.modalOpen = false;
    },
    editRow: (state, action) => {
      state.selectedRow = state.rows.find((x) => x.id === action.payload);
      state.modalOpen = true;
    },
    addRow: (state) => {
      state.selectedRow = initialState.selectedRow;
      state.modalOpen = true;
    },
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      //Get Car Inventory
      .addCase(fetchCartInventory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartInventory.fulfilled, (state, action) => {
        const { rows, total } = action.payload;
        state.status = "succeeded";
        state.rows = rows;
        state.total = total;
      })
      .addCase(fetchCartInventory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //Add or Update Car
      .addCase(addUpdateCar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUpdateCar.fulfilled, (state, action) => {
        const { rows, total } = action.payload;
        state.status = "succeeded";
        state.modalOpen = false;
        state.rows = rows;
        state.total = total;
      })
      .addCase(addUpdateCar.rejected, (state, action) => {
        state.status = "failed";
        state.modalOpen = false;
        state.error = action.error.message;
      })
      //Delete Car
      .addCase(deleteCar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        const { rows, total } = action.payload;
        state.status = "succeeded";
        state.rows = rows;
        state.total = total;
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  editRow,
  addRow,
  closeModal,
  resetError,
} = carInventorySlice.actions;

export const selectRows = (state) => state.carInventory.rows;
export const selectTotal = (state) => state.carInventory.total;
export const getPostStatus = (state) => state.carInventory.status;
export const getPostError = (state) => state.carInventory.error;
export const getRowSelected = (state) => state.carInventory.selectedRow;
export const selectModalOpen = (state) => state.carInventory.modalOpen;

export const selectRow = (state, id) =>
  state.carInventory.rows.find((x) => x.id === id);

export default carInventorySlice.reducer;
