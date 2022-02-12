import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from 'react-router-dom';

import { getLocations } from '../../store/location';    
import locationsHeaderImg from '../../images/locations-header.jpg';

import './Locations.css';

function Locations() {
    const dispatch = useDispatch();

    // const loc = useSelector((state) => {
    //     return state.loc;
    // });
    // const { id } = useParams();
    
    // const locations = useSelector((state) => state.locations);
    const sessionUser = useSelector((state) => state.session.user);

    const locations = useSelector((state) => Object.values(state.location));
    

    
    useEffect(() => {
        dispatch(getLocations())
    }, [dispatch]);

    console.log('#################### URL:', locations[0].Images[0].url);
    console.log('-------------------- LOCid:', locations[0].id);
// TODO: uncomment below
    // if(!locations) {
    //     return (<div> </div> );
    // }
    // TODO: check if user logged in *********************************

    
    // let loc = locations.map((loc) => loc.id);
    // console.log('RES **********====+> ', loc[0].Images);

    return (
            <>
            <div>
                
                <div className="image"
                style={{backgroundImage: `url(${locationsHeaderImg})`}} 
                alt='divers' 
                >
                </div>
            <div>
                <h1>Dive Site Locations</h1>
                {locations.map(({loc}) => ( 
                    <NavLink key={loc?.id} className='location' to={`/location/${loc?.id}`}>
                        <p className='title'>{loc?.title}LocationS </p>
                        <img src={locations[0].Images[0].url} alt="beach" />
                    </NavLink> 
                ))}
            </div>
            </div>
        </>
    );
};





export default Locations;

