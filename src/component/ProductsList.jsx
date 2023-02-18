import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../states/silces/productsSlice";
import { ProductCard } from "./ProductCard";

export const ProductsList = () => {
  // const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get(`https://fakestoreapi.com/products`);
  //     setProducts(res.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      setCategories(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const fetchByCategory = async (cat) => {
  //   try {
  //     const res = await axios.get(
  //       `https://fakestoreapi.com/products/category/${cat}`
  //     );
  //     setProducts(res.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    // let isMounted = true;
    // if (isMounted) {
    //   fetchData();
      fetchCategories();
    // }
    // return () => (isMounted = false);

    dispatch(fetchProducts())

  }, []);

  const shownProducts = products.map((product) => (
    <div
      className="col-3 mb-6"
      style={{ height: "600px", minWidth: "250px" }}
      key={product.id}
    >
      <ProductCard product={product} />
    </div>
  ));

  const categoriesButtons = categories.map((cat) => (
    <button
      key={cat}
      // onClick={() => fetchByCategory(cat)}
      className="btn btn-outline-primary m-2"
    >
      {cat}
    </button>
  ));

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="m-2" style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
        <button className="btn btn-outline-primary m-2" 
        // onClick={fetchData}
        >
          All
        </button>
        {categoriesButtons}
          </div> 
        <div className="row" style={{ justifyContent: "center" }}>
          {products.length > 0 ? shownProducts : <h2>Loading...</h2>}
        </div>
      </div>
    </>
  );
};
