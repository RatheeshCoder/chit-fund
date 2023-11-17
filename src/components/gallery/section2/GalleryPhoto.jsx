import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import photoData from '../../../data/data';

class GalleryPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      selectedFilter: 'all',
      isOpen: false,
      photoIndex: 0,
    };
  }

  componentDidMount() {
    this.setState({
      photos: photoData,
    });
  }

  handleFilterChange = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  openLightbox = (index) => {
    this.setState({ isOpen: true, photoIndex: index });
  };

  closeLightbox = () => {
    this.setState({ isOpen: false });
  };

  movePrev = () => {
    this.setState((state) => ({
      photoIndex: (state.photoIndex + state.photos.length - 1) % state.photos.length,
    }));
  };

  moveNext = () => {
    this.setState((state) => ({
      photoIndex: (state.photoIndex + 1) % state.photos.length,
    }));
  };

  render() {
    const { photos, selectedFilter, isOpen, photoIndex } = this.state;
    const filteredPhotos = photos.filter(
      (photo) => selectedFilter === 'all' || photo.category === selectedFilter
    );

    if (filteredPhotos.length === 0) {
      return <div className='cta-no-image'><h1>No photos available for the selected filter.</h1></div>;
    }

    const currentPhoto = filteredPhotos[photoIndex];

    return (
      <section className="gallery-photo">
        <div className="cta-title">
          <h1>Be A Part Of Our Joy Faces You See! Moments With Our Financial Geeks!</h1>
        </div>
        <div className="cta-filter-option">
          <button onClick={() => this.handleFilterChange('all')}>All</button>
          <button onClick={() => this.handleFilterChange('CustomerMeetups')}>Customer Meetups</button>
          <button onClick={() => this.handleFilterChange('FestivalCelebrations')}>Festival Celebrations</button>
          <button onClick={() => this.handleFilterChange('anniversary')}>3rd Year Anniversary </button>
        </div>

        <div className="gallery " >
          {filteredPhotos.map((photo, index) => (
            <div key={photo.id}>
              <img className='zoomIn'
                src={photo.url}
                alt={`Photo ${photo.id}`}
                onClick={() => this.openLightbox(index)}
              />
            </div>
          ))}
        </div>

        {isOpen && currentPhoto && (
          <Lightbox
            mainSrc={currentPhoto.url}
            nextSrc={filteredPhotos[(photoIndex + 1) % filteredPhotos.length].url}
            prevSrc={filteredPhotos[(photoIndex + filteredPhotos.length - 1) % filteredPhotos.length].url}
            onCloseRequest={this.closeLightbox}
            onMovePrevRequest={this.movePrev}
            onMoveNextRequest={this.moveNext}
            imageTitle={`Photo ${photoIndex + 1}`}
          />
        )}
      </section>
    );
  }
}

export default GalleryPhoto;
