import { shallow } from 'enzyme';
import React from 'react';
import App from "./App";

describe('App', () => {
  function setup() {
    return shallow(<App />);
  }

  it('Renders without crashing', () => {
    // Arrange
    const wrapper = setup();

    // Assert
    expect(wrapper).toMatchSnapshot();
  });
});