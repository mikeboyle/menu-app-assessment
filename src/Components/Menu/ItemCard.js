import React from 'react'

function ItemCard({item}) {
  return (
    <div>
        <ul>
            <li>id: {item.id}</li>
            <li>name: {item.name}</li>
            <li>price: ${item.price}</li>
            <li>{item.shortDescription}</li>
        </ul>
    </div>
  )
}

export default ItemCard