import React from "react";
import './Cart.css';

function Cart({ cartItems, deleteItemFromCart, totalCartItems, setCartItems}){
    return (
        <div className={`cart ${cartItems.length > 0 ? 'active' : ''}`}>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p className="empty--cart">The cart is empty!</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.product.id} className="cart--item">
                                <div>
                                    <div className="item--info">
                                        <div className="item--image">
                                            <img src={item.product.image} alt={item.product.name}/>
                                        </div>
                                        <div className="item--details">
                                            <h3>{item.product.name}</h3>
                                            <p>Price: ${item.product.price}</p>
                                        </div>
                                    </div>
                                    <div className="item--actions">
                                        <button className="remove--button" onClick={() => deleteItemFromCart(item.product)}>Remove Item</button>
                                        <div className="quantity">
                                            <button style={{ margin: "1%" }} onClick={(e) => {
                                                setCartItems((prevCartItems) => {
                                                    const updatedCart = prevCartItems.map(
                                                        (prevItem) => prevItem.product.id === item.product.id
                                                        ? {...prevItem, 
                                                            quantity: item.quantity + 1 }
                                                        : prevItem
                                                );
                                                return updatedCart;
                                            })}}>+</button>
                                            <p className="quant">{item.quantity}</p>
                                            <button onClick={(e) => {
                                                setCartItems((prevCartItems) => {
                                                    const updatedCart = prevCartItems.map(
                                                        (prevItem) => prevItem.product.id === item.product.id
                                                        ? {...prevItem, 
                                                            quantity: Math.max(item.quantity - 1, 0) }
                                                        : prevItem
                                                );
                                                return updatedCart;
                                            })}}>-</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="checkout--section">
                        <div className="checkout--total">
                            <p className="total">Total Amount: ${totalCartItems()}</p>
                        </div>
                        <button className="checkout--button" disabled={cartItems.length === 0 || totalCartItems() === 0}>Proceed to payment</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;