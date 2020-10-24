import { observer } from 'mobx-react';
import React, { Component } from 'react';
import ContactListHeader from '../../components/contact-list-header/contact-list-header';
import ContactListTabs from '../../components/contact-list-tabs/contact-list-tabs';
import ContactListContentContainer from '../contact-list-content-container/contact-list-content-container';
import './contact-list-container.less';

@observer
class ContactListContainer extends Component {
  render() {
    return (
      <div className='contact-list-container__main-wrapper'>
        <div className='contact-list-container__header-wrapper'>
          <ContactListHeader />
          <ContactListTabs />
          <div className='contact-list-container__header-wrapper--divider' />
        </div>
        <div className='contact-list-container__wrapper'>
          <ContactListContentContainer />
        </div>
      </div>
    );
  }
}

export default ContactListContainer;
