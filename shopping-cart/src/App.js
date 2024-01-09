import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import dataitems from "./data.js";
import './App.css';
import data from "./data.js";

function App() {

  const [items, setItems] = useState(dataitems);
  
  const [cartItems, setCartItems] = useState([]);
  const [searchItems, setSearchItems] = useState('');

  const addItemToCart = (addItem) => {
    const cartItemList = cartItems.find(item => item.product.id === addItem.id);

    if (cartItemList) {
      const latestCartUpdate = cartItems.map(
        item => item.product.id === addItem.id ? {
          ...item,
          quantity: item.quantity + 1 }
          : item
      );
      setCartItems(latestCartUpdate);
    }
    else {
      setCartItems([...cartItems, {product: addItem, quantity: 1}]);
    }
  };

  const deleteItemFromCart = (deleteItem) => {
    const updatedCart = cartItems.filter(item => item.product.id !== deleteItem.id);
    setCartItems(updatedCart);
  };

  const totalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const handleSearch = (event) => {
    setSearchItems(event.target.value);
  }

  const filterItems = items.filter((item) => item.name.toLowerCase().includes(searchItems.toLowerCase()));

  return (
    <div className="App">
      <SearchBar searchItem={searchItems} handleSearch={handleSearch}/>
      <main className="App-main">
        <ItemList items={items} filterItems={filterItems} addItemToCart={addItemToCart}/>
        <Cart cartItems={cartItems} deleteItemFromCart={deleteItemFromCart} totalCartItems={totalCartItems} setCartItems={setCartItems}/>
      </main>
    </div>
  );
}

export default App;
