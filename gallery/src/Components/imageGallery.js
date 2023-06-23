import React from 'react';

function ImageGallery() {
  const imageFolder = './images';

  const imageFilenames = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg'
  ];

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        {imageFilenames.map((filename) => (
          <img
            key={filename}
            src={`${imageFolder}/${filename}`}
            alt={filename}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
