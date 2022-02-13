import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import  Locations  from "./components/Locations/Locations";
import Location from "./components/Locations/Location";
import Footer from "./components/Footer/Footer";
import AddLocation from './components/AddLocation/AddLocation'


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);



  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route exact path="/" >
            <LandingPage />
          </Route>

          <Route exact path='/locations' >
            <Locations />
          </Route>

          <Route path='/location/:id'>
            <Location />
          </Route>

          <Route path='/location/new'>
            <AddLocation />
          </Route>

        </Switch>
        
      )}
      <Footer />
    </>

  );
}

export default App;