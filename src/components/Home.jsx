import React, { useState } from "react";
import ShowProduct from "./ShowProduct";
import Header from "./Header";

const Home = () => {
  const [price, setPrice] = useState(0);
  const [qtn, setQtn] = useState(0);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newItem = { name, price, description,qtn };
    const newData = [...data, newItem];
    setData(newData);
    setName('');
    setDescription("");
    setPrice(0);
    setQtn(0);
  };
  return (
    <>
   
    <form className="mt-5" onSubmit={submitHandler}>
      <label htmlFor="name" className="ml-4">
        <span className="mr-2">Medicine Name</span>
        <input type="text" placeholder="Medicine Name" onChange={(e) => setName(e.target.value)}/>
      </label>
      <label htmlFor="description">
        <span className="mr-2">Description</span>
        <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
      </label>
      <label htmlFor="price">
        <span className="mr-2">Price</span>
        <input type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
      </label>
      <label htmlFor="qtn">
        <span className="mr-2">Quantity</span>
        <input type="text" placeholder="Quantity" onChange={(e) => setQtn(e.target.value)}/>
      </label>
      <button className="ml-2 text-lg bg-sky-300 rounded-full w-[120px] text-white hover:bg-sky-700">
          Add Product
        </button>
        </form>

        <ShowProduct data={data}/>
    </>
  );
};

export default Home;
