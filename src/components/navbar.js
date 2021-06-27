import React, { useState } from 'react';
import '../styles/navbar.css';
import '../styles/buttonStyling.css';
import Button from '../components/button';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <nav id='navburgertarget' class='navbar' role='navigation' aria-label='main navigation'>
        <div
          style={{ color: 'white' }}
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          id='burger'
          data-target='navburgertarget'
          onClick={() => setIsActive(!isActive)}>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>

        <div
          className={`navbar-menu is-transparent navbar-end mt-5 mr-5 ${
            isActive ? 'is-active has-text-centered' : ''
          }`}>
          <div class='navbar-item'>
            <Button buttonText={'Services'} />
            <Button buttonText={'About'} />
            <Button buttonText={'Contact'} />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
