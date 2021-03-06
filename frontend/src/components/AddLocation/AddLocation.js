import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createLocation } from "../../store/location";



const AddLocation = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const history = useHistory();
    const [url, setUrl] = useState();
    const [title, setTitle] = useState();
    const [body , setBody] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zipCode, setZipCode] = useState();

    const updateUser = (e) => SpeechSynthesisUtterance(e.target.value);

    const updateImageUrl = (e) => setUrl(e.target.value);
    const updateTitle = (e) => setTitle(e.target.value);
    const updateBody = (e) => setBody(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateZipCode = (e) => setZipCode(e.target.value);




    // const redirect = () => history.push(`/location/${location[0].id }`);

    const handleSubmit =  (e) => {
        e.preventDefault();
        
        const payload = {
            // id: location[0].id ,
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

        const newLocation =  dispatch(createLocation(payload));
            if (newLocation) {
                history.push(`/location/${newLocation.id}`);
                reset();
            }
        };

        const reset = () => {
            setUrl('');
            setTitle('');
            setBody('');
            setCity('');
            setState('');
            setZipCode('');
        }

        const cancelButton = (e) => {
            history.push('/locations');
        }

        if (!user) return <p>Something went wrong, please go back and try again.</p>;

    return ( 
            <>
            <div className="edit-location-container">
                <form className="edit-location-form">
                    <div className="image-edit-loc">
                        <label>
                            Image URL
                            <input type="text"
                                placeholder="Image URL"
                                value={url}
                                onChange={updateImageUrl}
                                required
                            />
                        </label>
                    </div>
                    <div className="title-loc-edit">
                        <label>Title
                            <input type="text"
                                placeholder="Title"
                                // value={location.title}
                                onChange={updateTitle}
                                required
                            />
                            </label>
                    </div>
                    <div className="body-loc-edit">
                        <label>Body
                            <textarea id='edit-textarea-loc' type='text' cols="100" rows="5"
                                placeholder="Description"
                                value={body}
                                onChange={updateBody}
                                
                            />
                            </label>
                    </div>
                    <div className="city-loc-edit">
                        <label>City
                            <input type="text"
                                placeholder="City"
                                value={city}
                                onChange={updateCity}
                                required
                            />
                            </label>
                    </div>
                    <div className="state-loc-edit">
                        <label>State
                        <input type="text" 
                            placeholder="State"
                            value={state}
                            onChange={updateState}
                            required
                        />
                        </label>
                    </div>
                    <div className="zip-code-loc-edit">
                        <label>Zip Code
                        <input type="text" 
                            placeholder="Zip Code"
                            value={zipCode}
                            onChange={updateZipCode}
                            required
                        />
                        </label>
                    </div>
                    <div className="button-loc-edit">
                        <button className="submit-btn-loc-edit" onClick={handleSubmit}>Submit</button>
                        <button id='add-loc-cancel-btn' 
                            type="true"
                            onClick={cancelButton}
                        >Cancel</button>
                    </div>
                </form>
            </div>
            </>
        );
  
}


export default AddLocation;
