import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

export const todoSlide = createSlice({
  name: "todo",
  initialState: {
    products: []
  },
  reducers: {
    getTodo: (state, action) => {
      state.data = [action.payload];
    }
  }
});

export const getTodoAsync = (props) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.prodo.in/products/category/${props.category_id}?limit=${props.limit}&page=${props.page}`
    );
    dispatch(getTodo(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getTodo } = todoSlide.actions;
export const showTodo = (state) => state.todo.data;
export default todoSlide.reducer;
