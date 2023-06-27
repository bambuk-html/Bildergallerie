import React from 'react';
import image1 from "./images/image_1.jpg";
import image2 from "./images/image_2.jpg";
import image3 from "./images/image_3.jpg";
import image4 from "./images/image_4.jpg";
import image5 from "./images/image_5.jpg";
import image6 from "./images/image_6.jpg";
import image7 from "./images/image_7.jpg";
import image8 from "./images/image_8.jpg";
import image9 from "./images/image_9.jpg";
import image10 from "./images/image_10.jpg";
import image11 from "./images/image_11.jpg";
import image12 from "./images/image_12.jpg";
import image13 from "./images/image_13.jpg";
import image14 from "./images/image_14.jpg";
import image15 from "./images/image_15.jpg";

function ImageGallery() {
  const imageFilenames = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15
  ];

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        {imageFilenames.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
