initialState = {
  isLoading: false,
  products: [],
  error: null,
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_DATA": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "SUCCESS_DATA": {
      return {
        isLoading: false,
        products: action.payload,
        error: null,
      };
    }
    case "FAILED_DATA":
      {
        return {
          isLoading: false,
          products: [],
          error: action.payload,
        };
      }

      break;

    default:
      break;
  }
};
