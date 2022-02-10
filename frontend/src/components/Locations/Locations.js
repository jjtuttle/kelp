import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom';

import { getLocations } from '../../store/location';    
import locationsHeaderImg from '../../images/locations-header.jpg';

import './Locations.css';

export function Locations(props) {
    const dispatch = useDispatch();
    const locations = useSelector((state) => Object.values(state.location.locations));
    const sessionUser = useSelector((state) => state.session.user);

    console.log("PROPS__________-------",props.locations);

    useEffect(() => {
        dispatch(getLocations())
    }, [dispatch]);

    if(!locations) {
        return (<div> </div> );
    }
    // TODO: check if user logged in *********************************


    return (
 
            <div >
                <p>LOCATIONS </p>
                <h1>LOCATIONS LIST PAGE</h1>
                <div className="image"
                style={{backgroundImage: `url(${locationsHeaderImg})`}} 
                alt='divers' 
                >
                </div>
              <div>
                 {locations?.map(({id, title}) => (
                    <NavLink key={id} className='site' to={`/location/${id}`}>
                        <p className='title'>{title} ??????? </p>
                    </NavLink>
                ))}
            </div>

            </div>
            

    );
};





export default Locations;

