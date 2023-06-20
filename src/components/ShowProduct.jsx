import React, { useRef } from "react";

const ShowProduct = ({ data }) => {
    const amount = useRef()
    const submit=()=>{
        console.log(amount.current.value);
    }
  return (
    <table className="mt-4" >
      <thead>
        <tr className="">
          <th className="mr-2">Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index} ref={amount}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.qtn}</td>
              <td>
                <button className="ml-2 text-lg bg-sky-300 rounded-full w-[120px] text-white hover:bg-sky-700" onClick={submit}>Add to Cart</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ShowProduct;
