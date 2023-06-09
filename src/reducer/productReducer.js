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

    case "CATEGORY_ERROR":
      return {
        ...state,
        isCategoryLoading: false,
        isError: true
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

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload
      };

    case "SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true
      };

    case "SET_PRODUCT_NULL":
      return {
        ...state,
        products: []
      };

    default:
      return state;
  }
};

export default ProductReducer;
