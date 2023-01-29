import "./Product.css";

function Product({ product }) {
  return (
    <div className="product">
      <ul>
        <li>id: {product.id}</li>
        <li>name: {product.name}</li>
        <li>price: ${product.price.toFixed(2)}</li>
        <li>{product.shortDescription}</li>
      </ul>
    </div>
  );
}

export default Product;
