import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../Menu/ItemCard";
import Error from "../Error";

const API = "https://px32id5fdg.execute-api.us-east-1.amazonaws.com/data";

function MenuContainer() {
  const [menu, setMenu] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setMenu(res.data))
      .catch((err) => console.log(err));
  }, []);

  let filteredItems = menu;

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const lowerCaseInput = (input) => input.toLowerCase();

  if (searchInput) {
    filteredItems = menu.filter((item) => {
      const { name, shortDescription } = item;
      return (
        name.toLowerCase().includes(searchInput.toLowerCase()) ||
        shortDescription.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
  }

  return (
    <div>
      <h1>Our Menu</h1>
      <input
        type="text"
        placeholder="search"
        value={searchInput}
        onChange={handleChange}
      />
      {filteredItems ?
      filteredItems.map((item) => (
        <ItemCard item={item} key={item.id} />
      )) : <Error />
      }
    </div>
  );
}

export default MenuContainer;
