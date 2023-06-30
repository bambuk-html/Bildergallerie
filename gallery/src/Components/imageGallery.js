import React, { useState } from 'react';
import './ImageGallery.css';

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

const imageFilenames = [
  { image: image1, title: "Asiatische Snacks" },
  { image: image2, title: "Gemüse" },
  { image: image3, title: "Brot" },
  { image: image4, title: "Getreideartikel" },
  { image: image5, title: "Alkoholische Getränke" },
  { image: image6, title: "Waschmmittel" },
  { image: image7, title: "Kekse" },
  { image: image8, title: "Fertigsuppen" },
  { image: image9, title: "Chips" },
  { image: image10, title: "Schokolade" },
  { image: image11, title: "Tee" },
  { image: image12, title: "Glückskekse" },
  { image: image13, title: "Dosengetränke" },
  { image: image14, title: "Chips" },
  { image: image15, title: "Gekühlte Getränke" }
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="image-container">
        {imageFilenames.map((item, index) => (
          <div key={index} className="image-item">
            <img
              src={item.image}
              alt={index + 1}
              className="image"
              onClick={() => handleImageClick(item)}
            />
            <p className="image-title">{item.title}</p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={closeImage}>&times;</span>
          <img src={selectedImage.image} alt="Selected" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
