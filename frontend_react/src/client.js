// Connect Sanity with React 
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_PROJECTID,
    dataset: process.env.REACT_APP_DATASET,
    apiVersion: process.env.REACT_APP_APIVERSION,
    useCdn: process.env.REACT_APP_USECDN ?? true,
    token: process.env.REACT_APP_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);