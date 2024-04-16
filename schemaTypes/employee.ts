import { IEmployee } from './types';

const employee: IEmployee = {
  name: 'emplyee',
  title: 'Employees',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'jobTitle', type: 'string', title: 'Job Title' },
    { name: 'employeeImage', type: 'image', title: 'Employee Image', options: { hotspot: true } },
    { name: 'emailText', type: 'string', title: 'Email' },
    { name: 'phoneNumber', type: 'number', title: 'Phone Number' },
    { name: 'employeeText', type: 'text', title: 'Employee Text' },
  ],
};

export default employee;