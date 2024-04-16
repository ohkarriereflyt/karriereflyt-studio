import { IApplicants } from './types';

const applicants: IApplicants = {
    name: 'applicants',
    title: 'Applicants',
    type: 'document',
    fieldsets: [
        { name: 'topSection', title: 'Top Section', options: { collapsible: true, collapsed: true } },
        { name: 'bottomSection', title: 'Bottom Section', options: { collapsible: true, collapsed: true } },
    ],
    initialValue: {
        documentTitle: 'For Applicants',  
    },
    fields: [
        {
            name: 'documentTitle',  
            type: 'string',
            title: 'Document Title'
        },

        //Top Section
        {
            name: 'topSectionTitle',
            type: 'string',
            title: 'Title',
            fieldset: 'topSection'
        },
        {
            name: 'topSectionSubTitle',
            type: 'string',
            title: 'SubTitle',
            fieldset: 'topSection'
        },
        {
            name: 'topSectionText',
            type: 'text',
            title: 'Text',
            fieldset: 'topSection'
        },
        
        //Bottom Section
        {
            name: 'bottomSectionTitle',
            type: 'string',
            title: 'Title',
            fieldset: 'bottomSection'
        },
        {
            name: 'bottomSectionText',
            type: 'text',
            title: 'Text',
            fieldset: 'bottomSection'
        },
    ],
};

export default applicants;