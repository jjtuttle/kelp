// add csrfFetch()
import { csrfFetch } from '../store/csrf';


// for dive sites page in card layout
 const LOAD_LOCATIONS = "location/LOAD_LOCATIONS";
 const EDIT_LOCATION = "location/EDIT_LOCATION";
 const DELETE_LOCATION = "location/DELETE_LOCATION";
 const ADD_LOCATION = "location/ADD_LOCATION";
 const LOAD_LOCATION = "location/LOAD_LOCATION";


// ===========================================================================
// TYPES
// ===========================================================================
// load ALL locations  
 const loadLocations = (locations) => {
    return {
        type: LOAD_LOCATIONS,
        locations,
    };
};

// load single location once clicked on
const loadLocation = (location) => ({
    type: LOAD_LOCATION,
    location,
});

 const editLocation = (location) => ({
    type: EDIT_LOCATION,
    location,
});

 const addLocation = (location) => ({
    type: ADD_LOCATION,
    location,
});

 const removeLocation = (locationId) => ({
    type: DELETE_LOCATION,
    locationId,
});
// ===========================================================================
// API's
// ===========================================================================
// GET /api/locations/
export const getLocations = () => async (dispatch) => {
    const res = await csrfFetch(`/api/locations/`);

    if(!res.ok) throw res;

    const{ locations } = await res.json();
    dispatch(loadLocations(locations));
};

// GET /api/location/:id
export const getLocation = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/location/${id}`);
    if (res.ok) {
        const location = await res.json();
        dispatch(loadLocation(location));
        return location;
    }
};

// POST /api/location/new
export const createLocation = (payload) => async (dispatch) => {
    const { userId, title, body, address, city, state, zipCode } = payload;
    console.log('add location =====>', payload);
    const res = await csrfFetch('/api/location', {
        method: 'POST',
        headers: { ' Content-Type': 'application/json'},
        body: JSON.stringify({ userId, title, body, address, city, state, zipCode }),
    });
    if(!res.ok) throw res;

    const { location } = await res.json();
    dispatch(addLocation(location));
    return location;
}

// PUT /api/locations/:id - changed param: location
export const updateLocation = (payload, location) => async (dispatch) => {
    const { id, userId, title, body, address, city, state, zipCode } = payload;
    // const { id } = location;

    const res = await csrfFetch(`/api/location/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
 
    if (res.ok) {
        const location = await res.json();
        dispatch(editLocation(location));
        return location;
    }
};

// DELETE /api/location/:id
export const deleteLocation = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/location/${id}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        const location = await res.json();
        dispatch(removeLocation(location.id));
    }
};


// ===========================================================================
// REDUCER
// ===========================================================================
// const initialState = {
//     list: []
// }; initialState <- from params state = initialState

const locationReducer = (state = {} , action) => {
    let newState;

    switch (action.type) {
        case LOAD_LOCATIONS:
            newState = {...state};
            action.locations.forEach((location) => {
                newState[location.id] = location;
            });
            return newState;
        case LOAD_LOCATION:
            const loc = {...state};
            loc[action.location.location.id] = action.location.location; 
            return loc;
        case DELETE_LOCATION:
            newState = {...state};
            delete newState[action.locationId];
            return newState;
        case ADD_LOCATION:
            newState = {...state};
            newState[action.location.id] = action.location;
            return newState;
        case EDIT_LOCATION:
            const editState = {...state};
            editState[action.location.id] = action.location;
            return editState;
        default:
            return state;
    }
}


export default locationReducer;