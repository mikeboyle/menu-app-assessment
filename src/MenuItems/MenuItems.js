import MenuItem from "../MenuItem/MenuItem";

import { useState } from "react";

const MenuItems = ({menuItems}) => {
    const [searchInput, setSearchInput] = useState('');

    let dataToDisplay = menuItems;

    if(searchInput){
        dataToDisplay = menuItems.filter(item => {
            let {name, shortDescription} = item;
            return name.toLowerCase().includes(searchInput.toLowerCase()) || shortDescription.toLowerCase().includes(searchInput.toLowerCase())
        });
    }


    return (
        <div className="MenuItems">
            <div className="MenuItems_input">
            <input type="text" placeholder="search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            </div>
            <div className="MenuItems_content">
           {dataToDisplay.length > 0 ? dataToDisplay.map(menuItem => <MenuItem key={menuItem.id} menuItem={menuItem}/>) : <div>No results for {searchInput}</div>}
            </div>
        </div>
    );
}

export default MenuItems;