export const getAgentName = (firstName, lastName) => `${firstName} ${lastName}`;

export const formatDate = (date) => {
  return new Date(date).toLocaleString('en-US');
};

export const componentHandler = (data) => (typeof data === 'function' ? data() : data);

export const getPageTitle = (path) => {
  switch (path) {
    case '/':
      return 'General report';
    case '/agent':
      return 'Agents list';
    case path.includes('/call/49151484522'):
      return 'Calls';
    default:
      return null;
  }
};
