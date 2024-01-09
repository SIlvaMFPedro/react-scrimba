import React from "react";
import './SearchBar.css';

function SearchBar({ searchItem, handleSearch }){
    return (
        <header className="App--header">
            <h1>Shopping Cart</h1>
            <div className="search--bar">
                <input type="text" placeholder="Search for products..." value={searchItem} onChange={handleSearch}/>
            </div>
        </header>
    );
}

export default SearchBar;