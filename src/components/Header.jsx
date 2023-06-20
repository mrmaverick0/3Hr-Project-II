import React from 'react'
import HeaderCartBtn from './HeaderCartBtn'

const Header = (props) => {
  return (
    <>
    <div className='flex items-center justify-between'>
        <div className='text-xl ml-24 font-bold'>Medicine</div>
        <HeaderCartBtn onClick={props.onShowCart}/>
    </div>
    
    </>
  )
}

export default Header