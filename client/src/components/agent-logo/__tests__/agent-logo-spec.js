import React from 'react';
import renderer from 'react-test-renderer';
import AgentLogo from '../agent-logo.component';

describe('AgentLogo: ', () => {
  test('render with no props passed', () => {
    const component = renderer.create(<AgentLogo />).toJSON();
    expect(component).toMatchSnapshot();
  });
  test('render with all props passed', () => {
    const component = renderer.create(<AgentLogo name="x" src="x" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
