import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import photoData from "../../../data/data";

class GalleryPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      selectedFilter: "all",
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
      photoIndex:
        (state.photoIndex + state.photos.length - 1) % state.photos.length,
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
      (photo) => selectedFilter === "all" || photo.category === selectedFilter
    );

    if (filteredPhotos.length === 0) {
      return (
        <div className="cta-no-image">
          <h1>No photos available for the selected filter.</h1>
        </div>
      );
    }

    const currentPhoto = filteredPhotos[photoIndex];

    return (
      <section className="gallery-photo container mx-auto p-4 md:p-8 lg:p-12">
        <div className="cta-title text-center mb-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            Be A Part Of Our Joy Faces You See! Moments With Our Financial
            Geeks!
          </h1>
        </div>

        <div className="cta-filter-option flex justify-center space-x-4 mb-4">
          <button
            className={`${
              selectedFilter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } px-4 py-2 rounded`}
            onClick={() => this.handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`${
              selectedFilter === "CustomerMeetups"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } px-4 py-2 rounded`}
            onClick={() => this.handleFilterChange("CustomerMeetups")}
          >
            {selectedFilter === "CustomerMeetups" ? (
              <span className="text-blue-500">Customer Meetups</span>
            ) : (
              "Customer Meetups"
            )}
          </button>
          <button
            className={`${
              selectedFilter === "FestivalCelebrations"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } px-4 py-2 rounded`}
            onClick={() => this.handleFilterChange("FestivalCelebrations")}
          >
            {selectedFilter === "FestivalCelebrations" ? (
              <span className="text-blue-500">Festival Celebrations</span>
            ) : (
              "Festival Celebrations"
            )}
          </button>
          <button
            className={`${
              selectedFilter === "anniversary"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } px-4 py-2 rounded`}
            onClick={() => this.handleFilterChange("anniversary")}
          >
            {selectedFilter === "anniversary" ? (
              <span className="text-blue-500">3rd Year Anniversary</span>
            ) : (
              "3rd Year Anniversary"
            )}
          </button>
        </div>

        <div className="gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div key={photo.id}>
              <img
                className="zoomIn  cursor-pointer"
                src={photo.url}
                alt={`Photo ${photo.id}`}
                onClick={() => this.openLightbox(index)}
                style={{ margin: "0", display: "block" }}
              />
            </div>
          ))}
        </div>

        {isOpen && currentPhoto && (
          <Lightbox
            mainSrc={currentPhoto.url}
            nextSrc={
              filteredPhotos[(photoIndex + 1) % filteredPhotos.length].url
            }
            prevSrc={
              filteredPhotos[
                (photoIndex + filteredPhotos.length - 1) % filteredPhotos.length
              ].url
            }
            onCloseRequest={this.closeLightbox}
            onMovePrevRequest={this.movePrev}
            onMoveNextRequest={this.moveNext}
            imageTitle={`Photo ${photoIndex + 1}`}
            wrapperClassName="custom-lightbox-wrapper"
            reactModalStyle={{ overlay: { zIndex: 1100 } }}
            imageAlt={`Photo ${photoIndex + 1}`}
            enableZoom={false}
            shouldCloseOnEsc={true}
            animationDuration={300}
            animationDisabled={false}
            nextLabel="Next"
            prevLabel="Previous"
            closeLabel="Close"
            zoomInLabel="Zoom In"
            zoomOutLabel="Zoom Out"
            imagePadding={20}
            clickOutsideToClose={true}
            moveNextOnCloseRequest={false}
            movePrevOnCloseRequest={false}
            discourageDownloads={false}
            toolbarButtons={[
              <button
                key="close"
                className="lightbox-button"
                onClick={this.closeLightbox}
              >
                Close
              </button>,
              <button
                key="prev"
                className="lightbox-button"
                onClick={this.movePrev}
                disabled={photoIndex === 0}
              >
                Previous
              </button>,
              <button
                key="next"
                className="lightbox-button"
                onClick={this.moveNext}
                disabled={photoIndex === filteredPhotos.length - 1}
              >
                Next
              </button>,
            ]}
          />
        )}
      </section>
    );
  }
}

export default GalleryPhoto;
