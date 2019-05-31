import React from 'react';
import {NavLink, Link} from 'react-router-dom';


class Header extends React.Component {
  render(){
    return (
    <nav>
      <NavLink to='/login' activeClassName='active'>Login</NavLink>
      <NavLink to='/tables' activeClassName='active'>Tables</NavLink>
    </nav>
    );
  }
}

export default Header;
