import { IEmployee } from './types';

const employee: IEmployee = {
  name: 'emplyee',
  title: 'Employee',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Navn' },
    { name: 'jobTitle', type: 'string', title: 'Tittel' },
    { name: 'employeeImage', type: 'image', title: 'Profil bilde', options: { hotspot: true } },
    { name: 'emailText', type: 'email', title: 'Email' },
    { name: 'phoneNumber', type: 'string', title: 'Telefon nummer' },
    { name: 'facebook', type: 'string', title: 'Facebook' },
    { name: 'linkedin', type: 'string', title: 'LinkedIn' },
    { name: 'bioShort', type: 'text', title: 'Bio (kort)' },
    { name: 'keywords', type: 'array', title: 'Stikkord', of: [{ type: 'string' }] },
    { name: 'bio', type: 'text', title: 'Bio (full)' },
  ],
};

export default employee;