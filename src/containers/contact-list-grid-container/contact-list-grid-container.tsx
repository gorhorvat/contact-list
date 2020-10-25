import { observer } from 'mobx-react';
import React, { Component } from 'react';
import AddNewContactCard from '../../components/add-new-contact-card/add-new-contact-card';
import { ContactListTab } from '../../components/contact-list-tabs/contact-list-tabs';
import contactListStore from '../../stores/contact-list-store';
import ContactCardContainer from '../contact-card-container/contact-card-container';
import ContactModalContainer from '../contact-modal-container/contact-modal-container';
import './contact-list-grid-container.less';

@observer
class ContactListGridContainer extends Component {
  componentDidMount() {
    contactListStore.getContacts();
  }

  render() {
    const {
      contacts,
      onContactAddClick,
      isFormActive,
      selectedTab,
    } = contactListStore;

    return (
      <>
        <div className='contact-list-grid-container__wrapper'>
          {selectedTab === ContactListTab.AllContacts ? (
            <>
              <AddNewContactCard onContactAddClick={onContactAddClick} />
              {contacts.map((contact) => (
                <ContactCardContainer contact={contact} key={contact.id} />
              ))}
            </>
          ) : (
            <>
              {contacts
                .filter((contact) => contact.isFavorite)
                .map((contact) => (
                  <ContactCardContainer contact={contact} key={contact.id} />
                ))}
            </>
          )}
        </div>
        {isFormActive && <ContactModalContainer />}
      </>
    );
  }
}

export default observer(ContactListGridContainer);
