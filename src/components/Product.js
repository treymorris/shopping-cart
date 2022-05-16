import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Product({ cart, addItem }) {
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  let myHeaders = new Headers();
  myHeaders.append("Authorization", "{{authorization}}");
  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${id}`,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      }
    );
    const item = await data.json();
    setItem(item.data.item);
  };

  let navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <h1 className="text-white text-center mb-5 mt-5">{item.name}</h1>
      <p className="text-light text-center">{item.description}</p>
      <div className="container">
        <img src={item.images.featured} alt={item.name} />
      </div>
      <h5 className="text-light text-center p-2 mt-3">{item.cost} vbucks</h5>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            addItem(item);
            navigate("/shop");
          }}
        >
          Add To Cart
        </button>
        <button type="button" className="btn btn-primary" onClick={handleCart}>
          Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
