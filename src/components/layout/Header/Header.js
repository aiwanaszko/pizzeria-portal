import React from 'react';
import {NavLink, Link} from 'react-router-dom';


class Header extends React.Component {
  render(){
    return (
    <nav>
      <NavLink to='/' activeClassName='active'>Dashboard</NavLink>
      <NavLink to='/login' activeClassName='active'>Login</NavLink>
      <NavLink to='/tables' activeClassName='active'>Tables</NavLink>
      <NavLink to='/ordering' activeClassName='active'>Ordering</NavLink>
      <NavLink to='/kitchen' activeClassName='active'>Kitchen</NavLink>
    </nav>
    );
  }
}

export default Header;
