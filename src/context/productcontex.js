import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const initialState = {
  isCategoryLoading: false,
  categoryList: [],
  isLoading: false,
  isError: false,
  products: [],
  isSingleLoading: false,
  singleProduct: {}
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //my 1st API call for category
  const getCategory = async (url) => {
    dispatch({ type: "SET_CATEGORY_LOADING" });
    try {
      const res = await axios.get(url);
      const category = await res.data;
      // console.log(category);
      dispatch({ type: "SET_CATEGORY_DATA", payload: category });
    } catch (error) {
      dispatch({ type: "CATEGORY_ERROR" });
    }
  };
  useEffect(() => {
    getCategory("https://api.prodo.in/categories");
  }, []);

  //my 2nd API call for products
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

  //my 3rd API call for single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      console.log(singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  // to clear product list when at home
  const setHome = () => {
    dispatch({ type: "SET_PRODUCT_NULL" });
  };

  return (
    <AppContext.Provider
      value={{ ...state, getProducts, getSingleProduct, setHome }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
