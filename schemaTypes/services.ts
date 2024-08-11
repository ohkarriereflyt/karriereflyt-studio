import {IServices} from './types'

const services: IServices = {
  name: 'services',
  title: 'Services',
  type: 'document',
  fieldsets: [
    {name: 'mainSection', title: 'Main Section', options: {collapsible: true, collapsed: true}},
    {
      name: 'topTextSection',
      title: 'Top Text Section',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'recruitingSection',
      title: 'Recruiting Section',
      options: {collapsible: true, collapsed: true},
    },
    {name: 'hireSection', title: 'Hire Section', options: {collapsible: true, collapsed: true}},
    {
      name: 'headhuntingSection',
      title: 'Headhunting Section',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'counselingSection',
      title: 'Counseling Section',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'middleTextSection',
      title: 'Middle Text Section',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'adaptedToNeedsSection',
      title: 'Adapted to Needs Section',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'personalityTestAndAbilityTestSection',
      title: 'Personality Test and Ability Test Section',
      options: {collapsible: true, collapsed: true},
    },
  ],
  initialValue: {
    title: 'Services',
  },
  fields: [
    {
      name: 'documentTitle',
      type: 'string',
      title: 'Document Title',
    },

    // Main Section
    {
      name: 'mainTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'mainSection',
    },
    {
      name: 'mainSubTitleItems',
      type: 'array',
      title: 'Subtitle Items',
      of: [{type: 'string'}],
      fieldset: 'mainSection',
    },

    //Top Text Section
    {
      name: 'topTextTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'topTextSection',
    },

    //Recruiting Section
    {
      name: 'recruitingCategory',
      type: 'string',
      title: 'Category',
      fieldset: 'recruitingSection',
    },
    {
      name: 'recruitingTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'recruitingSection',
    },
    {
      name: 'recruitingTitleItems',
      type: 'array',
      title: 'recruiting Items',
      of: [{type: 'string'}],
      fieldset: 'recruitingSection',
    },
    {
      name: 'recruitingReadMoreText',
      type: 'text',
      title: 'Read More Text',
      fieldset: 'recruitingSection',
    },

    //Hire Section
    {
      name: 'hireCategory',
      type: 'string',
      title: 'Category',
      fieldset: 'hireSection',
    },
    {
      name: 'hireTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'hireSection',
    },
    {
      name: 'hireTitleItems',
      type: 'array',
      title: 'hire Items',
      of: [{type: 'string'}],
      fieldset: 'hireSection',
    },
    {
      name: 'hireReadMoreText',
      type: 'text',
      title: 'Read More Text',
      fieldset: 'hireSection',
    },

    //Headhunting Section
    {
      name: 'headhuntingCategory',
      type: 'string',
      title: 'Category',
      fieldset: 'headhuntingSection',
    },
    {
      name: 'headhuntingTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'headhuntingSection',
    },
    {
      name: 'headhuntingTitleItems',
      type: 'array',
      title: 'headhunting Items',
      of: [{type: 'string'}],
      fieldset: 'headhuntingSection',
    },
    {
      name: 'headhuntingReadMoreText',
      type: 'text',
      title: 'Read More Text',
      fieldset: 'headhuntingSection',
    },

    //Counseling Section
    {
      name: 'conselingCategory',
      type: 'string',
      title: 'Category',
      fieldset: 'counselingSection',
    },

    {
      name: 'counselingTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'counselingSection',
    },
    {
      name: 'counselingTitleItems',
      type: 'array',
      title: 'counseling Items',
      of: [{type: 'string'}],
      fieldset: 'counselingSection',
    },
    {
      name: 'counselingReadMoreText',
      type: 'text',
      title: 'Read More Text',
      fieldset: 'counselingSection',
    },

    //Middle Text Section
    {
      name: 'middleTextTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'middleTextSection',
    },

    //Adapted to Needs Section
    {
      name: 'adaptedToNeedsCategory',
      type: 'string',
      title: 'Category',
      fieldset: 'adaptedToNeedsSection',
    },
    {
      name: 'adaptedToNeedsTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'adaptedToNeedsSection',
    },
    {
      name: 'adaptedToNeedsTitleItems',
      type: 'array',
      title: 'Adapted to Needs Items',
      of: [{type: 'string'}],
      fieldset: 'adaptedToNeedsSection',
    },
    {
      name: 'adaptedToNeedsReadMoreText',
      type: 'text',
      title: 'Read More Text',
      fieldset: 'adaptedToNeedsSection',
    },

    //Personality Test and Ability Test Section
    {
      name: 'personalityTestAndAbilityTestCategory',
      type: 'string',
      title: 'Category',
      fieldset: 'personalityTestAndAbilityTestSection',
    },
    {
      name: 'personalityTestAndAbilityTestTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'personalityTestAndAbilityTestSection',
    },
    {
      name: 'personalityTestAndAbilityTestTitleItems',
      type: 'array',
      title: 'Personality Test and Ability Test Items',
      of: [{type: 'string'}],
      fieldset: 'personalityTestAndAbilityTestSection',
    },
    {
      name: 'personalityTestAndAbilityTestReadMoreText',
      type: 'text',
      title: 'Read More Text',
      fieldset: 'personalityTestAndAbilityTestSection',
    },
  ],
}

export default services
