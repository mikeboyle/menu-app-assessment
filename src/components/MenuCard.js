import React from 'react'
import "../components/MenuCard.css"

export default function MenuCard({menu}) {
    const {id, name, price, shortDescription} = menu

  return (
    <div className='menuCard'>
        <ul>
            <li>id: {id}</li>
            <li>name: {name}</li>
            <li>price: ${price.toFixed(2)}</li>
            <li>{shortDescription}</li>
        </ul>
    </div>
  )
}
