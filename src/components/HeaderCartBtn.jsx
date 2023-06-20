import React, { useContext } from 'react'
import CartContext from '../store/cart-context'

const HeaderCartBtn = (props) => {
  const cartCtx=useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className='text-lg font-bold text-white hover:bg-sky-700 flex items-center justify-center mr-5 bg-sky-400 mt-5 w-[100px] rounded-full' onClick={props.onClick}>
        <span className='mr-2'>Your cart</span>
        <span className=''>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartBtn