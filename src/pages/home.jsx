import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8082/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Flipkart Products
      </h1>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <h4>₹{product.price}</h4>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;