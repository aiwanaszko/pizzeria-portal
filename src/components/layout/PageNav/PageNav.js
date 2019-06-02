import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.scss';

class PageNav extends React.Component {
  render(){
    return (
    <nav className={styles.component}>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className={styles.link}>Dashboard</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' className={styles.link}>Login</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active' className={styles.link}>Tables</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active' className={styles.link}>Ordering</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' className={styles.link}>Kitchen</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/ordering/new`} activeClassName='active' className={styles.link}>New order</NavLink>
    </nav>
    );
  }
}

export default PageNav;
