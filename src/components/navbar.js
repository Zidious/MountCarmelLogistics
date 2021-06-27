import React, { useState } from 'react';
import '../styles/navbar.css';
import '../styles/buttonStyling.css';
import Button from '../components/button';

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <React.Fragment>
      <nav id='navburgertarget' class='navbar' role='navigation' aria-label='main navigation'>
        <div
          style={{ color: 'white' }}
          className={`navbar-burger burger ${toggle ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          id='burger'
          data-target='navburgertarget'
          onClick={() => setToggle(!toggle)}>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>

        <div
          className={`navbar-menu is-transparent navbar-end mt-5 mr-5 ${
            toggle ? 'is-active has-text-centered' : ''
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
