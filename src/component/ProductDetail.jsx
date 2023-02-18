import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const { image, title, description, price } = product;

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        if (isMounted) {
          setProduct(res.data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();

    return () => (isMounted = false);
  }, [id]);

  return product !== null ? (
    <div className="card card-detail container">
      <img src={image} className="card-img-top card-img-top-detail" alt={title} />
      <div className="card-body card-body-detail">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <span>{price}$</span>
        <br />
        <br />
      </div>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};
