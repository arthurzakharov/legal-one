import React from 'react';
import PropTypes from 'prop-types';
import styles from './page-title.module.scss';

const PageTitle = ({title}) => <div className={styles.PageTitle}>{title}</div>;

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
