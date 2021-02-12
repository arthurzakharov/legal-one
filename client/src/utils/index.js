export const getAgentName = (firstName, lastName) => {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  } else {
    return firstName || lastName;
  }
};

export const formatDate = (date) => {
  return new Date(date).toLocaleString('en-US');
};

export const componentHandler = (data) => (typeof data === 'function' ? data() : data);
