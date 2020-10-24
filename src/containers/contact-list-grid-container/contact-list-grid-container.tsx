import { observer } from 'mobx-react';
import React, { Component } from 'react';
import AddNewContactCard from '../../components/add-new-contact-card/add-new-contact-card';
import contactListStore from '../../stores/contact-list-store';
import ContactCardContainer from '../contact-card-container/contact-card-container';
import './contact-list-grid-container.less';

@observer
class ContactListGridContainer extends Component {
  componentDidMount() {
    contactListStore.getContacts();
  }

  render() {
    const { contacts } = contactListStore;

    return (
      <div className='contact-list-grid-container__wrapper'>
        <AddNewContactCard />
        {contacts.map((contact) => (
          <ContactCardContainer contact={contact} key={contact.id} />
        ))}
      </div>
    );
  }
}

export default observer(ContactListGridContainer);
