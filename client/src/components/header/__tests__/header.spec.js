import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../header.component';

describe('Header: ', () => {
  test('render', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
