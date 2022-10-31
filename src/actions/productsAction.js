import axios from "axios";
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "REQUEST_DATA" });
    const res = await axios.get("https://dummyjson.com/products");
    const products = res.data.products;
    // console.log(products);
    dispatch({ type: "SUCCESS_DATA", payload: products });
  } catch (error) {
    dispatch({ type: "FAILED_DATA", payload: error.message });
  }
};
