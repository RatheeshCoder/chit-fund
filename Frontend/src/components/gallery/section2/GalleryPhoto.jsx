import React, { useState } from 'react';
import ImageModal from './ImageModal';
import photoData from '../../../data/data';
// import './YourStylesheet.css'; // Import your stylesheet

const GalleryPhoto = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedImage(null); // Reset selected image when changing the category
    setActiveCategory(category); // Update active category
  };

  const handleImageClick = (imageUrl, event) => {
    event.stopPropagation(); // Stop event propagation to prevent multiple modals from opening
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;

    const currentIndex = photoData.findIndex((photo) => photo.url === selectedImage);
    const prevIndex = (currentIndex - 1 + photoData.length) % photoData.length;
    setSelectedImage(photoData[prevIndex].url);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;

    const currentIndex = photoData.findIndex((photo) => photo.url === selectedImage);
    const nextIndex = (currentIndex + 1) % photoData.length;
    setSelectedImage(photoData[nextIndex].url);
  };

  const filteredPhotos = selectedCategory
    ? photoData.filter((photo) => photo.category === selectedCategory)
    : photoData;

  return (
    <div>
       <div className=" my-10 caption text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-black ">
      <h2 className='font-display  tracking-tight lg:text-5xl text-3xl md:text-3xl font-bold tracking-tight'>Be A Part Of Our Joy Faces You See! Moments With Our Financial Geeks</h2>
    </div>
      <div className="filter-options">
        <button
          onClick={() => handleCategoryClick(null)}
          className={activeCategory === null ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick('CustomerMeetups')}
          className={activeCategory === 'CustomerMeetups' ? 'active' : ''}
        >
          Customer Meetups
        </button>
        <button
          onClick={() => handleCategoryClick('FestivalCelebrations')}
          className={activeCategory === 'FestivalCelebrations' ? 'active' : ''}
        >
          Festival Celebrations
        </button>
        <button
          onClick={() => handleCategoryClick('anniversary')}
          className={activeCategory === 'anniversary' ? 'active' : ''}
        >
          Anniversary
        </button>
        {/* Add more buttons for other categories as needed */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group cursor-pointer relative"
            onClick={(event) => handleImageClick(photo.url, event)}
          >
            <img
              src={photo.url}
              alt={`Image ${photo.id}`}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={handleCloseModal}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </div>
  );
};

export default GalleryPhoto;
