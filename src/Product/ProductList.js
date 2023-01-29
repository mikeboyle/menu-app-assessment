import { useState, useEffect } from "react";
import Product from "./Product";

const API_URL = "https://px32id5fdg.execute-api.us-east-1.amazonaws.com/data";

function ProductList() {
  const [productData, setProductData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProductData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredProductData = productData
    .filter((product) => {
      return (
        product.name.toLowerCase().includes(searchInput.toLocaleLowerCase()) ||
        product.shortDescription
          .toLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      );
    })
    .map((product) => {
      return <Product product={product} key={product.id} />;
    });

  const renderBasedOnProductList = () => {
    if (loading) {
      return <div>Loading</div>;
    }

    if (searchInput !== "" && filteredProductData.length === 0) {
      return <div>No result for {searchInput}</div>;
    } else {
      return filteredProductData;
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        placeholder="search"
      />
      <section>{renderBasedOnProductList()}</section>
    </div>
  );
}

export default ProductList;
