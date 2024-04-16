import { IReview } from './types';

const review: IReview = {
  name: 'review',
  title: 'Reviews',
  type: 'document',
  fields: [
    { name: 'author', type: 'string', title: 'Author' },
    { name: 'text', type: 'text', title: 'Text' },
    { name: 'authorImage', type: 'image', title: 'Author Image', options: { hotspot: true } },
  ],
};

export default review;