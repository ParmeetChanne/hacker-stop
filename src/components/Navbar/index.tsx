import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>HACKERSTOP</h1>
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to='/hacking' activeStyle>
            Hacking
          </NavLink>
          <NavLink to='/bugbounty' activeStyle>
            BugBounty
          </NavLink>
          <NavLink to='/oscp' activeStyle>
            OSCP
          </NavLink>
          <NavLink to='/writeups' activeStyle>
            Writeups
          </NavLink>
          <NavLink to='/creators' activeStyle>
            Creators
          </NavLink>
          <NavLink to='/mobilepentesting' activeStyle>
            Mobile Pentesting
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;