import { ContactNumberModel } from './ContactNumberModel';

export interface ContactModel {
  id: number;
  fullName: string;
  email: string;
  numbers: ContactNumberModel[];
  avatar: string;
  isFavorite: boolean;
}
