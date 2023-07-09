import * as React from '@astrojs/react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import './Projects.css'
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    originalClass: 'object-cover',
    thumbnailClass: 'rounded-lg'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
        originalClass: 'rounded-lg object-cover',
    thumbnailClass: 'rounded-lg'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
           originalClass: 'rounded-lg object-cover',
    thumbnailClass: 'rounded-lg'
  },
];

function MyGallery() {
  return <ImageGallery items={images} />;
}
export default MyGallery;
