import { IHomepage } from './types';

const homepage: IHomepage = {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fieldsets: [
        { name: 'mainSection', title: 'Main Section', options: { collapsible: true, collapsed: true } },
        { name: 'reviewsSection', title: 'Reviews Section', options: { collapsible: true, collapsed: true } },
        { name: 'subjectAreasSection', title: 'Subject Areas Section', options: { collapsible: true, collapsed: true } },
        { name: 'jobbkretserSection', title: 'Jobbkretser Section', options: { collapsible: true, collapsed: true } },
        { name: 'partnerCertificationSection', title: 'Partners and certifications Section', options: { collapsible: true, collapsed: true } },
        { name: 'bottomSection', title: 'Bottom Section', options: { collapsible: true, collapsed: true } },
    ],
    initialValue: {
        title: 'Homepage',  
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
            name: 'subTitle',
            type: 'string',
            title: 'Subtitle',
            fieldset: 'mainSection'
        },
        {
            name: 'heroImages',
            type: 'array',
            title: 'Images',
            of: [{ type: 'image' }],
            fieldset: 'mainSection'
        },

        //Reviews Section
        {
            name: 'reviewsTitle',
            type: 'string',
            title: 'Title',
            fieldset: 'reviewsSection'
        },
        {
            name: 'reviews',
            type: 'array',
            title: 'Reviews',
            of: [{ type: 'reference', to: [{ type: 'review' }] }],
            fieldset: 'reviewsSection'
        },


        //Subject Areas Section
        {
            name: 'subjectAreasTitle',
            type: 'string',
            title: 'Title',
            fieldset: 'subjectAreasSection'
        },
        {
            name: 'subjectAreasContainer1Title',
            type: 'string',
            title: 'Container 1 Title',
            fieldset: 'subjectAreasSection'
        },
        {
            name: 'container1Items',
            type: 'array',
            title: 'Container 1 Items',
            of: [{ type: 'string' }],
            fieldset: 'subjectAreasSection'
        },
        {
            name: 'subjectAreasContainer2Title',
            type: 'string',
            title: 'Container 2 Title',
            fieldset: 'subjectAreasSection'
        },
        {
            name: 'container2Items',
            type: 'array',
            title: 'Container 2 Items',
            of: [{ type: 'string' }],
            fieldset: 'subjectAreasSection'
        },
        {
            name: 'subjectAreasFooterText',
            type: 'text',
            title: 'Text',
            fieldset: 'subjectAreasSection'
        },

        // Jobbkretser Section
        {
            name: 'jobbkretserSectionTitle',
            type: 'string',
            title: 'Title',
            fieldset: 'jobbkretserSection'
        },
        {
            name: 'jobbkretserContainerItems',
            type: 'array',
            title: 'Items',
            of: [{ type: 'string' }],
            fieldset: 'jobbkretserSection'
        },
        {
            name: 'jobbkretserImage',
            type: 'image',
            title: 'Jobbkretser Image',
            fieldset: 'jobbkretserSection'
        },
        {
            name: 'jobbkretserSectionReadMore',
            type: 'text',
            title: 'Read More Text',
            fieldset: 'jobbkretserSection'
        },
        
        // Partner and Certification Section
        {
            name: 'partnerCertificationSectionTitle',
            type: 'string',
            title: 'Title',
            fieldset: 'partnerCertificationSection'
        },
        {
            name: 'partnerCertificationSectionImages',
            type: 'array',
            title: 'Images',
            of: [{ type: 'image' }],
            fieldset: 'partnerCertificationSection'
        },

        // Bottom Section
        {
            name: 'bottomSectionTitle',
            type: 'string',
            title: 'Text',
            fieldset: 'bottomSection'
        },
    ],
};

export default homepage;