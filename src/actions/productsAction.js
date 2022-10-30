import axios from "axios";
export const getAllProducts = async (dispatch) => {
  try {
    dispatch({ type: "REQUEST_DATA" });
    const res = await axios.get("https://dummyjson.com/products");
    dispatch({ type: "SUCCESS_DATA", payload: res.products });
  } catch (error) {
    dispatch({ type: "FAILED_DATA", payload: error.message });
  }
};
