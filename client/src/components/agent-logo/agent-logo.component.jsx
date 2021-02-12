import React from 'react';
import PropTypes from 'prop-types';
import styles from './agent-logo.module.scss';

const AgentLogo = ({src, name}) => <img className={styles.AgentLogo} src={src} alt={`Logo-${name}`} />;

AgentLogo.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};

export default AgentLogo;
