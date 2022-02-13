import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { getLocation, deleteLocation } from '../../store/location';
import noImage from '../../images/no-image.jpg';

import './Location.css';
import EditLocation from '../EditLocation/EditLocation';



const Location = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const loc = useSelector((state) => state.location[id]);
    const userId = useSelector((state) => state.session.user?.id);

    const location = useSelector((state) => Object.values(state.location));

    const [showEdit, setShowEdit] = useState(false);

    const history = useHistory();
    // const redirect = () => history.replace('/locations');

    useEffect(() => {
        dispatch(getLocation(id));
    }, [dispatch, id]);

    if(!id) {
        console.log('NOTHING FOUND!', loc);
        return null;
    }

    // location.map((loc) => {
    //     return console.log('USER ------->', userId);
    // });

    const handleDelete = (e) => {
        dispatch(deleteLocation(id));
        // redirect();
    }

    const editLocationClick = (e) => {
        setShowEdit((prevState) => !prevState);
    }

    return (
        <div key={loc?.id} id="main-container-loc">
            <div id="image-container-loc">
                <img id='image-loc' alt='dive location'
                    src={loc?.Images[0] ? loc?.Images[0].url : noImage }

                />
            </div>
            <div className="username-loc">
                <span>Posted by: {loc?.User.username}</span>
            </div>
            <div className="h1-loc">
                <h1>Dive Site Location - {loc?.title}</h1>
            </div>
            <div className="body-loc">
                <p>{loc?.body}</p>
            </div>
            <div className="city-loc">
                <p><span>City: {loc?.city ? loc.city : 'No City Entered'}</span></p>
            </div>
            <div className="state-loc">
                <p><span>State: {loc?.state ? loc.state : 'No State Entered'}</span></p>
            </div>
            <div className="zip-code-loc">
                <p><span>Zip Code: {loc?.zipCode ? loc.zipCode :'No Zip Code Entered'}</span></p>
            </div>
            <div className="edit-btn-container-loc" hidden={userId !== loc?.userId}>
                {userId === loc?.userId && (
                    <button className="edit-btn-loc"
                        onClick={editLocationClick}
                    >Edit</button>
                )}
                <div hidden={!showEdit}>
                    <EditLocation location={location} hideForm={() => setShowEdit(false)} />
                </div>
            </div>
            <div className="delete-btn-container-loc" >
                {userId === loc?.userId && (
                    <button className="delete-btn-loc" onClick={handleDelete}>DELETE</button>
                )}
            </div>
            
        </div>

    );
};
// <button className="cancel-btn-loc">CANCEL</button>

export default Location;
