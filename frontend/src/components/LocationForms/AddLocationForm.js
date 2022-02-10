import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const LocationForm = () => {
    const location = useSelector(state => state.location);
    const dispatch = useDispatch();

    // location DB info
    const [title, setTitle] = useState('');
    


    const handleSubmit = async (e) => {
        e.prevent.default();
    };

    const handleCancel = (e) => {
        e.prevent.default();
        //TODO if cancel hide form OR go back to locations (the list of all)??
    }

    return (
        <div>
            <h1>LOCATION FORM</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                    placeholder="Title"
                    min={5}
                    required
                    value={title}
                    onChange={(e) => (e.target.value)}
                />
            </form>
        </div>
    )

}

// title: DataTypes.STRING,

//     body: DataTypes.TEXT,

//     address: DataTypes.STRING,

//     city: DataTypes.STRING,

//     state: DataTypes.STRING,

//     zipCode: DataTypes.STRING,



export default LocationForm;

