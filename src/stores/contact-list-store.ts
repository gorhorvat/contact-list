import { action, observable } from 'mobx';
import { ContactListTab } from '../components/contact-list-tabs/contact-list-tabs';
import { ContactModel } from '../models/ContactModel';

export interface IContactListStore {
  selectedTab: ContactListTab;
  selectedContact: ContactModel | null;
  contacts: ContactModel[];
  isFormActive: boolean;

  changeSelectedTab: (tab: ContactListTab) => void;
  setSelectedContact: (contact: ContactModel | null) => void;
  getContacts: () => void;
  onContactFavorite: (id: number) => void;
  onContactEdit: (id: number) => void;
  onContactDelete: (id: number) => void;
  toggleForm: () => void;
}

export class ContactListStore implements IContactListStore {
  @observable selectedTab = ContactListTab.AllContacts;
  @observable selectedContact: ContactModel | null = null;
  @observable contacts: ContactModel[] = [];
  @observable isFormActive = false;

  @action
  changeSelectedTab = (tab: ContactListTab) => {
    this.selectedTab = tab;
  };

  @action
  setSelectedContact = (contact: ContactModel | null) => {
    this.selectedContact = contact;
  };

  @action
  onContactFavorite = (id: number) => {
    if (this.selectedContact?.id === id) {
      this.selectedContact.isFavorite = !this.selectedContact.isFavorite;
    }
  };

  onContactEdit = (id: number) => {
    this.toggleForm();
    this.setSelectedContact(
      this.contacts.find((contact) => contact.id === id)!
    );
  };

  @action
  onContactDelete = (id: number) => {
    this.contacts.filter((contact) => contact.id === id);
  };

  @action
  getContacts = () => {
    this.contacts = [
      {
        id: 1,
        fullName: 'Some Name',
        email: 'some.name@mail.com',
        numbers: [
          {
            number: 123456,
            type: 'Cell',
          },
        ],
        avatar:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        isFavorite: false,
      },
    ];
  };

  @action
  toggleForm = () => {
    this.isFormActive = !this.isFormActive;
  };
}

export default new ContactListStore();
