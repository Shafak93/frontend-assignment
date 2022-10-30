import axios from "axios";
export const getAllProducts = async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_DATA" });
    const res = await axios.get("https://dummyjson.com/products");
    dispatch({ type: "GET_DATA_SUCCESS", payload: res.products });
  } catch (error) {
    dispatch({ type: "GET_DATA_FAILED", payload: error.message });
  }
};
