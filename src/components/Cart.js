import { useNavigate } from "react-router-dom";

function Cart({ cart, removeItem }) {
  const orderTotal = (cart) => {
    return cart.reduce((total, current) => current.cost + total, 0);
  };

  let total = orderTotal(cart);

  let navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/contact");
  };

  return (
    <div>
      <h1 className="text-center text-light mt-5 mb-5">Cart</h1>
      {cart.map((item) => (
        <div className="card mx-auto mb-3" key={item.name}>
          <img src={item.images.icon} alt="icon"></img>
          <div className="card-body">
            <h5 className="card-title" key={item.costmeticId}>
              {item.name}
            </h5>
            <p className="card-text">{item.cost} vbucks</p>
            <button
              className="btn btn-primary w-100 mx-auto"
              onClick={() => {
                removeItem(item.name);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cardTotal">
        <h5 className="text-center pt-4">Shopping Cart Total</h5>
        <p className="text-center">{total} vbucks</p>
        <div className="container">
          <button onClick={handleCheckout} className="btn btn-primary">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
