
import React from 'react'

const PageNotFound = () => {
    return (
        <div id="wrapper">
            <img src="https://i.imgur.com/qIufhof.png" alt="page not found"/>
            <div id="info">
                <h3>This page could not be found</h3>
                <p>Please go back <a href='/' style={{borderBottom: '1px solid blue', color:'blue'}}>here</a> and try again.</p>
            </div>
        </div >
    );
};

export default PageNotFound;