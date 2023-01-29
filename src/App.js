import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

import MenuItems from "./MenuItems/MenuItems";

const API_URL = "https://px32id5fdg.execute-api.us-east-1.amazonaws.com/data"

const App = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
      axios.get(`${API_URL}`)
      .then(res => setMenuItems(res.data))
  }, [])

  console.log(menuItems)

  return (
  <div className="App">
    <h1>Our Menu</h1>
    <MenuItems menuItems={menuItems} />
  </div>
    );
}

export default App;
