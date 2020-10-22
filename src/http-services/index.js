import { instance } from './instance';
import { instancePosts } from './instancePosts';

export const Services = {
    getAllCountries: () => instance.get('/all'),
    getAllPosts: () => instancePosts.get('/posts')
};