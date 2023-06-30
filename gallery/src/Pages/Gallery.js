import ImageGallery from "../Components/imageGallery";
import Navbar from "../Components/navbar";
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <div className="gallery-container">
                <h1 className="gallery-title">Unser Sortiment</h1>
                </div>
                <ImageGallery />            
        </div>
    );
};

export default Gallery;