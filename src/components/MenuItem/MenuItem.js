import React from "react";

export default function MenuItem({ item }) {
  // console.log(item)
  const { id, name, price, shortDescription } = item;

  return (
    <div>
     id: {id}<br/>name: {name},<br/>price: ${price.toFixed(2)},<br/>short Description: {shortDescription}
     <br/>
     <br/>
    </div>
  );
}
