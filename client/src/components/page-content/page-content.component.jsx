import React from 'react';
import PropTypes from 'prop-types';
import styles from './page-content.module.scss';

const PageContent = ({children}) => <div className={styles.PageContent}>{children}</div>;

PageContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default PageContent;
