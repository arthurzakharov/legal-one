import React from 'react';
import renderer from 'react-test-renderer';
import AgentLook from '../agent-look';

describe('AgentLook: ', () => {
  test('render with all props passed', () => {
    const component = renderer
      .create(<AgentLook firstName="x" lastName="x" photo="x" identifier="x" onClick={() => 1} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
