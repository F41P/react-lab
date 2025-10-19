import { createReducer } from '@reduxjs/toolkit';
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from './actions';

let currentProductId = 9;

const productReducer = createReducer([], (builder) => {
  builder
    .addCase(fetchProducts, (state, action) => {
      return action.payload;
    })

    .addCase(addProduct, (state, action) => {
      currentProductId += 1;
      state.push({ id: currentProductId, ...action.payload });
    })

    .addCase(updateProduct, (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    })

    .addCase(deleteProduct, (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    });
});

export default productReducer;
