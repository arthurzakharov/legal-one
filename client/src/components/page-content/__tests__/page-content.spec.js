import React from 'react';
import renderer from 'react-test-renderer';
import PageContent from '../page-content.component';

describe('PageContent: ', () => {
  test('render', () => {
    const component = renderer
      .create(
        <PageContent>
          <p>x</p>
        </PageContent>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
