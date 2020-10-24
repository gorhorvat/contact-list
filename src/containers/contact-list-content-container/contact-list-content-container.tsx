import { observer } from 'mobx-react';
import React, { Component } from 'react';
import ContactListGridContainer from '../contact-list-grid-container/contact-list-grid-container';

@observer
class ContactListContentContainer extends Component {
  render() {
    return (
      <>
        <>search</>
        <ContactListGridContainer />
      </>
    );
  }
}

export default ContactListContentContainer;
