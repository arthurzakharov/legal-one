import React from 'react';
import PropTypes from 'prop-types';
import styles from './agent-look.module.scss';
import {getAgentName} from '../../utils';

const AgentLook = ({firstName, lastName, photo, identifier, onClick}) => (
  <div className={styles.AgentLook} onClick={() => onClick(identifier)}>
    <img className={styles.AgentLookImage} src={photo} alt={`Logo-${lastName}`} />
    <h6>{getAgentName(firstName, lastName)}</h6>
  </div>
);

AgentLook.propTypes = {
  identifier: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  photo: PropTypes.string,
  onClick: PropTypes.func,
};

export default AgentLook;
