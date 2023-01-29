import React, {useState} from 'react'
import MenuItem from "../MenuItem/MenuItem"


export default function MenuList({fullMenu}) {


  return (
    <div>  
    {fullMenu.map((item) => (
      <MenuItem key={item.id} item={item} />
    ))}
  </div>
  )
}
