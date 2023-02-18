import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, handelLocalStorage } from "../states/silces/cartSlice";

export const ProductCard = (props) => {
  const { id, image, title, description, price } = props.product;
  const dispatch = useDispatch()

  return (
    <div className="card">
      <img
        src={image}
        style={{ maxWidth: "100%", height: "300px" }}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 20)}...</h5>
        <p className="card-text" style={{ height: "100px" }}>
          {description.slice(0, 100)}...
        </p>
        <span>{price}$</span>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to={`/products/${id}`} className="btn btn-outline-primary">
            Details
          </Link>
          <button
            className="btn btn-outline-primary"
            onClick={() => {dispatch(addToCart(props.product)); dispatch(handelLocalStorage())}}
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};
