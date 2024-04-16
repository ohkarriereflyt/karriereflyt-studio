import { IContact } from './types';

const contact: IContact = {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fieldsets: [
        { name: 'mainSection', title: 'Main Section', options: { collapsible: true, collapsed: true } },
        { name: 'employeesSection', title: 'Employees Section', options: { collapsible: true, collapsed: true } },
        { name: 'contactSection', title: 'Contact Section', options: { collapsible: true, collapsed: true } },
    ],
    initialValue: {
        documentTitle: 'Contact us',  
    },
    fields: [
        {
            name: 'documentTitle',  
            type: 'string',
            title: 'Document Title'
        },

        // Main Section
        {
            name: 'mainTitle',
            type: 'string',
            title: 'Title',
            fieldset: 'mainSection'
        },
        {
            name: 'mainSubTitle',
            type: 'string',
            title: 'SubTitle',
            fieldset: 'mainSection'
        },

        //Employees Section
        {
            name: 'employees',
            type: 'array',
            title: 'Employees',
            of: [{ type: 'reference', to: [{ type: 'emplyee' }] }],
            fieldset: 'employeesSection'
        },
        
        //Contact Section
        {
            name: 'contactAddress',
            type: 'string',
            title: 'Address',
            fieldset: 'contactSection'
        },
        {
            name: 'contactPhoneNumber',
            type: 'number',
            title: 'Phone Number',
            fieldset: 'contactSection'
        },
        {
            name: 'contactEmail',
            type: 'string',
            title: 'Email',
            fieldset: 'contactSection'
        },
    ],
};

export default contact;