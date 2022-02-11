import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

import { getLocations } from '../../store/location';    
import locationsHeaderImg from '../../images/locations-header.jpg';

import './Locations.css';

function Locations() {
    const dispatch = useDispatch();
    const loc = useSelector((state) => {
        return state.loc;
    })
    // const locObj = Object.values(loc);
    
    // const locations = useSelector((state) => Object.values(state.location));
    // const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(getLocations())
    }, [dispatch]);

    console.log('loc ================+>', loc);

    if(!loc) {
        return (<div> </div> );
    }
    // TODO: check if user logged in *********************************


    return (
            <>
            <div key={loc.id}>
                
                <div className="image"
                style={{backgroundImage: `url(${locationsHeaderImg})`}} 
                alt='divers' 
                >
                </div>
            <div>
                <h1>Dive Site Locations</h1>
                {loc.map(({l}) => (
                    <NavLink key={l.id} className='location' to={`/location/${l.id}`}>
                        <p className='title'>{l.title}</p>
                    </NavLink>
                ))}
            </div>
            </div>
        </>
    );
};





export default Locations;

