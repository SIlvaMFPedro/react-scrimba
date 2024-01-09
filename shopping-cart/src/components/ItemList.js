import React from "react";
import './ItemList.css';

function ItemList({ items, filterItems, addItemToCart }){
    return (
        <div className="item--list">
            {filterItems.length === 0 ? (
                    <p className="no--results"> I am sorry no matching item found :( </p>
                ) : (
                    filterItems.map((item) => (
                        <div className="item" key={item.id}>
                            <img src={item.image} alt={item.name}/>
                            <h2>{item.name}</h2>
                            <p>Price: ${item.price}</p>
                            <button className="add--to--cart--button" onClick={() => addItemToCart(item)}>Add Item to Cart</button>
                        </div>
                    ))
                )}

        </div>
    );
}

export default ItemList;