import React from 'react'
import MenuCard from './MenuCard'
import { useState } from 'react'

export default function MenuList({menuData}) {
    
const [searchInput, setSearchInput] = useState("")

const handleChange = (e) => {
    setSearchInput(e.target.value);
}

let filteredData = menuData.filter((menu) => menu.name.toLowerCase().includes(searchInput.toLowerCase()) || menu.shortDescription.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <div>
        <h1>Our Menu</h1>
        <input value={searchInput} type='text' placeholder='search term' onChange={handleChange}/>
     {filteredData.map((menu) => (
        <MenuCard key={menu.id} menu={menu} />
      ))}
    </div>
  )
}
