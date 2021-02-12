import React from 'react';
import PropTypes from 'prop-types';
import styles from './agent-look.module.scss';
import {getAgentName} from '../../utils';
import AgentLogo from '../agent-logo/agent-logo.component';

const AgentLook = ({firstName, lastName, photo, identifier, onClick}) => (
  <div className={styles.AgentLook} onClick={() => onClick(identifier)}>
    <AgentLogo name={lastName} src={photo} />
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
