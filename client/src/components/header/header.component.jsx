import React from 'react';
import styles from './header.module.scss';
import {Link} from 'react-router-dom';

const Header = () => (
  <header className={styles.Header}>
    <ul className={styles.HeaderList}>
      <li className={styles.HeaderListItem}>
        <Link to={'/'}>General report</Link>
      </li>
      <li className={styles.HeaderListItem}>
        <Link to={'/'}>General report</Link>
      </li>
      <li className={styles.HeaderListItem}>
        <Link to={'/'}>General report</Link>
      </li>
    </ul>
  </header>
);

export default Header;
