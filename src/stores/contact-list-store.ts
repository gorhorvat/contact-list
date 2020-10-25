import { Input } from 'antd';
import { action, observable, toJS } from 'mobx';
import { ContactListTab } from '../components/contact-list-tabs/contact-list-tabs';
import { ContactModel } from '../models/ContactModel';

export interface IContactListStore {
  selectedTab: ContactListTab;
  selectedContact: ContactModel | null;
  contacts: ContactModel[];
  isFormActive: boolean;
  isFormEditable: boolean;
  searchRef: React.RefObject<Input> | null;

  changeSelectedTab: (tab: ContactListTab) => void;
  setSelectedContact: (contact: ContactModel | null) => void;
  getContacts: () => void;
  onContactFavoriteClick: (id: number) => void;
  onContactEditClick: (id: number) => void;
  onContactDeleteClick: (id: number) => void;
  toggleForm: () => void;
  setFormEditable: (isEditable: boolean) => void;
  onContactAddClick: () => void;
  onContactSaveClick: () => void;
  onContactCancelClick: () => void;
  addContact: (newContact: ContactModel) => void;
  onContactSearch: (searchedText: string) => void;
  setSearchReference: (searchRef: React.RefObject<Input>) => void;
}

export class ContactListStore implements IContactListStore {
  @observable selectedTab = ContactListTab.AllContacts;
  @observable selectedContact: ContactModel | null = null;
  @observable contacts: ContactModel[] = [];
  @observable isFormActive = false;
  @observable isFormEditable = false;
  @observable searchRef: React.RefObject<Input> | null = null;

  @action
  changeSelectedTab = (tab: ContactListTab) => {
    this.selectedTab = tab;
    this.searchRef!.current!.input.value = '';
    this.getContacts();
  };

  @action
  setSelectedContact = (contact: ContactModel | null) => {
    this.selectedContact = contact;
  };

  @action
  onContactFavoriteClick = (id: number) => {
    this.setSelectedContact(
      this.contacts.find((contact) => contact.id === id)!
    );
    this.selectedContact!.isFavorite = !this.selectedContact!.isFavorite;
  };

  onContactEditClick = (id: number) => {
    this.toggleForm();
    this.setSelectedContact(
      this.contacts.find((contact) => contact.id === id)!
    );
  };

  @action
  onContactDeleteClick = (id: number) => {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
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
      {
        id: 2,
        fullName: 'Some Other Name',
        email: 'some2.name@mail.com',
        numbers: [
          {
            number: 15489,
            type: 'Home',
          },
        ],
        avatar:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        isFavorite: true,
      },
      {
        id: 3,
        fullName: 'Also Some Other Name',
        email: 'some2.name@mail.com',
        numbers: [
          {
            number: 15489,
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

  @action
  setFormEditable = (isEditable: boolean) => {
    this.isFormEditable = isEditable;
  };

  onContactAddClick = () => {
    this.setSelectedContact(null);
    this.setFormEditable(true);
    this.toggleForm();
  };

  onContactSaveClick = () => {
    console.log('saving contact');
    const newContact: ContactModel = {
      id: this.contacts.length,
      fullName: 'New contact',
      email: 'some2.name@mail.com',
      numbers: [
        {
          number: 15489,
          type: 'Cell',
        },
      ],
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      isFavorite: false,
    };

    this.addContact(newContact);
    this.toggleForm();
  };

  onContactCancelClick = () => {
    this.setSelectedContact(null);
    this.toggleForm();
  };

  @action
  addContact = (newContact: ContactModel) => {
    this.contacts.push(newContact);
  };

  @action
  onContactSearch = (searchedText: string) => {
    this.getContacts();
    console.log(toJS(this.contacts));

    this.contacts = this.contacts.filter((contact) =>
      contact.fullName.toLowerCase().includes(searchedText)
    );
  };

  @action
  setSearchReference = (searchRef: React.RefObject<Input>) => {
    this.searchRef = searchRef;
  };
}

export default new ContactListStore();
