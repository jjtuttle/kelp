import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { getLocation, deleteLocation } from '../../store/location';

import './Locations.css';



const Location = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const loc = useSelector((state) => state.location[id]);
    const user = useSelector((state) => state.session.user);
    const userId = useSelector((state) => state.session.user?.id);
    
    // console.log(loc);
    // console.log('!!!!!!!!!!!!!!!!!!!!!!!!');

    

    
    
    const [showEdit, setShowEdit] = useState(false);

    const history = useHistory();
    const redirect = () => history.replace('/locations');

    useEffect(() => {
        dispatch(getLocation(id));
    }, [dispatch, id]);

    if(!loc) {
        console.log('NOTHING FOUND!');
    }

    // TODO: 1. user CANCEL form
    // TODO: 2. user DELETE location

    return (
        <div className="main-container">
            <h1>Dive Site Location - {loc?.title}</h1>
            <p>{loc?.title}</p>
            <p>{loc?.body}</p>
            <p><span>{loc?.city}</span><span>{loc?.state}</span></p>
        </div>

    );
};

export default Location;
