import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";
  const appClass = isInCart ? "in-cart" : "";

  function handleClick(){
    setIsInCart(!isInCart);
  }
  
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
