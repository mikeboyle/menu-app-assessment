import React from "react";

export default function MenuItem({ item }) {
  // console.log(item)
  const { id, name, price, shortDescription } = item;

  return (
    <div>
      {id},
      {name},
      {price},
      {shortDescription}
    </div>
  );
}
