import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, handelLocalStorage } from "../states/silces/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  console.log(cartItems);

  const totalPrice = cartItems.reduce((ac, cur) => ac += cur.price * cur.quantity, 0)

  return (
    <div className="container">
      {cartItems.length === 0 ? (
        <h2>You Have No Items In The Cart</h2>
      ) : (<>
        <div className="d-flex justify-content-between align-items-center">
            <h1>Cart Products</h1>
            <button className="btn btn-danger" onClick={() => {dispatch(clearCart()); dispatch(handelLocalStorage())}}>Clear Cart</button>
        </div>
        <table className="table table-striped m-4">
          <thead>
            <tr>
              <th>item</th>
              <th>image</th>
              <th>quantity</th>
              <th>unite price</th>
              <th>total price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="tr-item">
                <td>{item.title.slice(0, 100)}...</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button className="btn btn-danger btn-sm delete-item"
                    onClick={() => {dispatch(removeFromCart(item)); dispatch(handelLocalStorage())}}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
              <h5 className="pt-2">Total Price : ${totalPrice.toFixed(2)}</h5>
        </table>
        </>
      )}
    </div>
  );
};
