import { observer } from 'mobx-react';
import React, { Component } from 'react';
import ContactListGridContainer from '../contact-list-grid-container/contact-list-grid-container';
import ContactSearchContainer from '../contact-search-container/contact-search-container';

@observer
class ContactListContentContainer extends Component {
  render() {
    return (
      <>
        <ContactSearchContainer />
        <ContactListGridContainer />
      </>
    );
  }
}

export default ContactListContentContainer;
