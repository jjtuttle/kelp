import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { getLocation, deleteLocation } from '../../store/location';
import noImage from '../../images/no-image.jpg';

import './Locations.css';



const Location = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const loc = useSelector((state) => state.location[id]);
    const user = useSelector((state) => state.session.user);
    const userId = useSelector((state) => state.session.user?.id);

    console.log('loc.Image --------->>>>>>>>', loc[Image]);

    const [showEdit, setShowEdit] = useState(false);

    const history = useHistory();
    const redirect = () => history.replace('/locations');

    useEffect(() => {
        dispatch(getLocation(id));
    }, [dispatch, id]);

    if(!id) {
        console.log('NOTHING FOUND!', loc);
        return null;
    }

    // TODO: 1. user CANCEL form
    // TODO: 2. user DELETE location

    return (
        <div className="main-container">
            <div className="image">
                <img alt='dive location'
                    src={loc?.Images[0] ? loc?.Images[0].url : noImage }
                />
            </div>
            <div className="username">
                <span>Posted by: {user?.username} </span>
            </div>
            <div className="h1">
                <h1>Dive Site Location - {loc?.title}</h1>
            </div>
            <div className="title">
                <p><span>Title: {loc?.title}</span></p>
            </div>
            <div className="body">
                <p>Body: {loc?.body}</p>
            </div>
            <div className="city">
                <p><span>City: {loc?.city ? loc.city : 'No City Entered'}</span></p>
            </div>
            <div className="state">
                <p><span>State: {loc?.state ? loc.state : 'No State Entered'}</span></p>
            </div>
            <div className="zip-code">
                <p><span>Zip Code: {loc?.zipCode ? loc.zipCode : 'No Zip Code Entered'}</span></p>
            </div>
            <div className="btn-container">
                <button className="delete-btn">DELETE</button><button className="cancel-btn">CANCEL</button>
            </div>
            
        </div>

    );
};

export default Location;
