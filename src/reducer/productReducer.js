const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY_LOADING":
      return {
        ...state,
        isCategoryLoading: true
      };

    case "SET_CATEGORY_DATA":
      return {
        ...state,
        isCategoryLoading: false,
        categoryList: action.payload
      };

    case "API_CATEGORY_ERROR":
      return {
        ...state,
        isCategoryLoading: false,
        isCategoryError: true
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true
      };

    case "SET_API_DATA":
      return {
        ...state,
        isLoading: false,
        products: action.payload
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
};

export default ProductReducer;
