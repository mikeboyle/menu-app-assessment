import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

export default function MenuList({ fullMenu }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  let filtedMenu = fullMenu;

  if (searchInput) {
    filtedMenu = fullMenu.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
  }

  const renderContent = () => {
    if (filtedMenu.length === 0) {
      //if no result
      return (
        <div>No result for {searchInput}</div>
      ) 
     
    } else {
      return (
        <div>
          {filtedMenu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Item"
        onChange={handleChange}
      />
      {renderContent()}
    </div>
  );
}
