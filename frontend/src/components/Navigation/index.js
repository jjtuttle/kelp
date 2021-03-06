import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import DemoUser from './DemoUser';
// import SignupFormPage from '../SignupFormPage';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" className='signup-a-btn'>Sign Up</NavLink>
        <DemoUser />
      </>
    );
  }
  // Navbar links 
  return (
    <ul className='nav menu'>
      <li className='current active parent'>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to='/locations'>Locations</NavLink>
        <NavLink exact to='/location/new'>Add Location</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;