import React from 'react';
import renderer from 'react-test-renderer';
import PageTitle from '../page-title.component';

describe('PageTitle: ', () => {
  test('render with passed prop', () => {
    const component = renderer.create(<PageTitle title="x" />).toJSON();
    expect(component).toMatchSnapshot();
  });
  test('render without passed prop', () => {
    const component = renderer.create(<PageTitle />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
