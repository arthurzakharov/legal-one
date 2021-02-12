import React from 'react';
import styles from './header.module.scss';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.Header}>
      <ul className={styles.HeaderList}>
        <li className={styles.HeaderListItem}>
          <Link to={'/'}>General report</Link>
        </li>
        <li className={styles.HeaderListItem}>
          <Link to={'/agent'}>Agents list</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
