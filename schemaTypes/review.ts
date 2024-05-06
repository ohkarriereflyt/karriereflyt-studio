import { IReview } from './types';

const review: IReview = {
  name: 'review',
  title: 'Reviews',
  type: 'document',
  fields: [
    { name: 'author', type: 'string', title: 'Author' },
    { name: 'textTitle', type: 'string', title: 'Text Title' },
    { name: 'text', type: 'text', title: 'Text' },
    { name: 'position', type: 'string', title: 'Position' },
    { name: 'company', type: 'string', title: 'Company' },
    { name: 'authorImage', type: 'image', title: 'Author Image', options: { hotspot: true } },
  ],
};

export default review;