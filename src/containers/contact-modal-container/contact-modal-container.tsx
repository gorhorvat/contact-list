import { Modal } from 'antd';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { ContactModel } from '../../models/ContactModel';
import contactListStore from '../../stores/contact-list-store';
import ContactForm from '../../components/contact-form/contact-form';

@observer
class ContactModalContainer extends Component {
  @observable contact: ContactModel = {
    id: 0,
    fullName: '',
    email: '',
    isFavorite: false,
    numbers: [],
    avatar: '',
  };

  render() {
    const {
      isFormActive,
      selectedContact,
      onContactSaveClick,
      onContactCancelClick,
    } = contactListStore;

    return (
      <Modal
        title={selectedContact === null ? 'Add new contact' : 'Edit contact'}
        visible={isFormActive}
        closable={false}
        onOk={onContactSaveClick}
        onCancel={onContactCancelClick}
      >
        <ContactForm
          contact={selectedContact === null ? this.contact : selectedContact}
          onFormValuesChange={this.onFormValuesChange}
        />
      </Modal>
    );
  }

  onFormValuesChange = (changedValues: any, values: any) => {
    console.log(changedValues, values);
  };
}

export default ContactModalContainer;
