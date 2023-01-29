import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ItemCard from './Menu/ItemCard';

 const API = 'https://px32id5fdg.execute-api.us-east-1.amazonaws.com/data'

function MenuContainer() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get(API)
        .then((res) => setMenu(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        {menu.map(item => <ItemCard item={item} id={item.id}/>)}
    </div>
  )
}

export default MenuContainer