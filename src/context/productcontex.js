import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const initialState = {
  isCategoryLoading: false,
  categoryList: [],
  isCategoryError: false,
  isLoading: false,
  isError: false,
  products: []
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //API call for category
  const getCategory = async (url) => {
    dispatch({ type: "SET_CATEGORY_LOADING" });
    try {
      const res = await axios.get(url);
      const category = await res.data;
      console.log(category);
      dispatch({ type: "SET_CATEGORY_DATA", payload: category });
    } catch (error) {
      dispatch({ type: "API_CATEGORY_ERROR" });
    }
  };
  useEffect(() => {
    getCategory("https://api.prodo.in/categories");
  }, []);

  //API call for products
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const product = await res.data.items;
      // console.log(product);
      dispatch({ type: "SET_API_DATA", payload: product });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  useEffect(() => {
    getProducts(
      `https://api.prodo.in/products/category/610811f7f774dd0104d0b62e?limit=100&page=1`
    );
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

//custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
