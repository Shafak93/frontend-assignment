import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/productsAction";

const Products = () => {
  const { isLoading, products, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {products && (
        <h1>
          {products.map((product) => (
            <img src={product.thumbnail} />
          ))}
        </h1>
      )}
    </div>
  );
};

export default Products;
