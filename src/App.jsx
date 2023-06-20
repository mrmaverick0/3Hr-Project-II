
import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Home from './components/Home'
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler}/>
     <Home/>
    </CartProvider>
  )
}

export default App
