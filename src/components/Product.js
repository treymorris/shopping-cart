import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Product() {

    const { id } = useParams();

    useEffect(() => {
        fetchItem()
    }, []);

    const [item, setItem] = useState({
        images: {}
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
        setItem(item.data.item)
        console.log(item);
      
    };

  return (
      <div >
          <h1 className="text-white text-center mb-5 mt-5">{item.name}</h1>
          <p className="text-light text-center">{item.description}</p>
          <div className="container"><img src={item.images.featured} alt={item.name} /></div>
          <h5 className="text-light text-center p-2 mt-3">{item.cost} vbucks</h5>
          <div className="container">
              <button type="button" className="btn btn-primary">Add To Cart</button>
              <button type="button" className="btn btn-primary">Cart</button>
          </div>
    </div>
  );
}

export default Product;
