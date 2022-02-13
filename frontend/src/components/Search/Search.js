import React from "react";


const Search = () => {


    return (
        <>
            <form action='/' method='GET'>
                <label htmlFor="header-search">
                <span className="visually-hidden" style={{color:'white'}}>Search for locations</span>
                </label>
                <input type="text" 
                    id="header-search"
                    placeholder="Search for locations"
                    name="s"
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
        </>
    );
};


export default Search;
