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
      onContactFavoriteClick,
      onContactEditClick,
      onContactDeleteClick,
    } = contactListStore;

    return (
      <ContactCard
        contact={this.props.contact}
        onContactFavoriteClick={onContactFavoriteClick}
        onContactEditClick={onContactEditClick}
        onContactDeleteClick={onContactDeleteClick}
      />
    );
  }
}

export default ContactCardContainer;
