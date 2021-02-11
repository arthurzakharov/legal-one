export const getAgentName = (agentObject) => `${agentObject.firstName} ${agentObject.lastName}`;

export const formatDate = (date) => {
  return new Date(date).toLocaleString('en-US');
};
