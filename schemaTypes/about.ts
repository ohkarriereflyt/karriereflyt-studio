import { IAbout } from './types';

const about: IAbout = {
    name: 'about',
    title: 'About',
    type: 'document',
    fieldsets: [
        { name: 'mainSection', title: 'Main Section', options: { collapsible: true, collapsed: true } },
        { name: 'ourVisionSection', title: 'Vision Section', options: { collapsible: true, collapsed: true } },
        { name: 'employeesSection', title: 'Employees Section', options: { collapsible: true, collapsed: true } },
    ],
    initialValue: {
        documentTitle: 'About us',  
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
            name: 'mainSectionText',
            type: 'text',
            title: 'Text',
            fieldset: 'mainSection'
        },
        {
            name: 'mainSectionImage',
            type: 'image',
            title: 'Main Image',
            fieldset: 'mainSection'
        },
        
        //Vision Section
        {
            name: 'ourVisionTitle',
            type: 'string',
            title: 'Title',
            fieldset: 'ourVisionSection'
        },
        {
            name: 'ourVisionText',
            type: 'text',
            title: 'Text',
            fieldset: 'ourVisionSection'
        },
        {
            name: 'visionImage',
            type: 'image',
            title: 'Vision Image',
            fieldset: 'ourVisionSection'
        },

        //Employees Section
        {
            name: 'employeesTitle',
            type: 'string',
            title: 'Title',
            fieldset: 'employeesSection'
        },
        {
            name: 'employees',
            type: 'array',
            title: 'Employees',
            of: [{ type: 'reference', to: [{ type: 'emplyee' }] }],
            fieldset: 'employeesSection'
        },
    ],
};

export default about;