import { observer } from 'mobx-react';
import { Component } from 'react';
import React from 'react';
import { ContactModel } from '../../models/ContactModel';
import ContactCard from '../../components/contact-card/contact-card';
import contactListStore from '../../stores/contact-list-store';

interface Props {
  contact: ContactModel;
}

@observer
class ContactCardContainer extends Component<Props> {
  render() {
    const {
      onContactFavorite,
      onContactEdit,
      onContactDelete,
    } = contactListStore;

    return (
      <ContactCard
        contact={this.props.contact}
        onContactFavorite={onContactFavorite}
        onContactEdit={onContactEdit}
        onContactDelete={onContactDelete}
      />
    );
  }
}

export default ContactCardContainer;
