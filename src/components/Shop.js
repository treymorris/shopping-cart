import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  let myHeaders = new Headers();
  myHeaders.append("Authorization", "{{authorization}}");
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get",
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      }
    );
    const items = await data.json();
    
      setItems(items.data);
      
  };

    const filtered = items.filter(item => item.item.images.featured !== null)
        
  return (
    <div>
      <h1 className="text-center text-white mt-3">Shop Fortnite</h1>
      <div className="productList">
        {filtered.map((item) => (
          <div className="" key={item.itemId}>
            <div className="container shrink">
              <img src={item.item.images.icon} alt={item.itemId} />
            </div>
            <h5 className="text-center imgTitle" >
              <NavLink to={`/shop/${item.itemId}`}>{item.item.name}</NavLink>
            </h5>
            <p className="text-center text-secondary imgTitle">
              {item.store.cost} Dollar Bucks
            </p>
            <p className="text-center text-info imgTitle">
              Rating: {item.item.ratings.avgStars} Stars
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
