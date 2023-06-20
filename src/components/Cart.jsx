import React from "react";
import Modal from "./Modal";

const Cart = (props) => {
  const productItems = [
    {
      id: 1,
      name: 'Product 1',
      quantity: 1,
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 2,
      price: 200,
    },
  ];

    return (
      <Modal onClose={props.onClose}>
        <h2 className="text-center font-bold text-2xl">Your cart</h2>
        <ul className="text-xl">
          {productItems.map((productItem, index) => (
            <li key={index} className="flex items-center justify-between ml-4">
              <span>{productItem.name}</span>
              <span>{productItem.price}</span>
              <span>{productItem.quantity}</span>
            </li>
          ))}
        </ul>
        <h1 className="text-xl ml-5 mt-5 font-bold">Total price</h1>
        <button className="text-xl bg-red-400 text-white rounded-full w-[100px] mt-5 hover:bg-red-500" onClick={props.onClose}>Close</button>
      </Modal>
    );
 
};

export default Cart;
