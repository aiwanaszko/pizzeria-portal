import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to='/tables/booking/:id'>Booking</Link>
    <Link to='/tables/event/:id'>Event</Link>
  </div>
);

export default Tables;
