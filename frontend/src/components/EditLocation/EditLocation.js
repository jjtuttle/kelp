import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {  updateLocation } from "../../store/location";


const EditLocation = ({location, hideForm}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    
    const [url, setUrl] = useState(location?.url);
    const [title, setTitle] = useState(location?.title);
    const [body , setBody] = useState(location?.body);
    const [city, setCity] = useState(location?.city);
    const [state, setState] = useState(location?.state);
    const [zipCode, setZipCode] = useState(location?.zipCode);

    const handleSubmit =  (e) => {
        e.prevent.default();

        const payload = {
            id: location.id,
            image: {
                url
            },
            userId: user.id,
            title,
            body,
            city,
            state,
            zipCode
        };
        const updatedLocation =  dispatch(updateLocation(payload));
        if(updatedLocation) {
            if(updatedLocation) {
                hideForm();
            }
        }
    };


    return (
        <>
        <div className="edit-location-container">
            <form className="edit-location" >
                <div className="image-edit-loc">
                    <label>
                        Image URL
                        <input type="text"
                            placeholder="Image URL"
                            value={url ? url : ''}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                </div>
                <div className="title-loc-edit">
                    <label>Title
                        <input type="text"
                            placeholder="Title"
                            value={location.title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        </label>
                </div>
                <div className="body-loc-edit">
                    <label>Body
                        <textarea id='edit-textarea-loc' type='text' cols="100" rows="5"
                            placeholder="Description"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                        </label>
                </div>
                <div className="city-loc-edit">
                    <label>City
                        <input type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        </label>
                </div>
                <div className="state-loc-edit">
                    <label>State
                    <input type="text" 
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                    </label>
                </div>
                <div className="zip-code-loc-edit">
                    <label>Zip Code
                    <input type="text" 
                        placeholder="Zip Code"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    </label>
                </div>
                <div className="button-loc-edit">
                    <button className="submit-btn-loc-edit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
        </>
    );
};





export default EditLocation;