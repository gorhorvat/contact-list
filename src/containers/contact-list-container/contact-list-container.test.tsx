import React from "react";
import { shallow } from 'enzyme';
import ContactListContainer from "./contact-list-container";

describe('ContactListContainer', () => {
  function setup() {
    return shallow(<ContactListContainer />);
  }

  it('Renders without crashing', () => {
    // Arrange
    const wrapper = setup();

    // Assert
    expect(wrapper).toMatchSnapshot();
  });
});