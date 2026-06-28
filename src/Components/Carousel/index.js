import MainImage from "../../Assets/Images/DiSHomeBanner.jpg";
import HomeImage from "../../Assets/Images/GundamFlashpointMedia.jpg";
import Laws from "../../Assets/Images/LawsofFlashpoint.jpg";

export const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner bg-black">
        <div className="carousel-item active">
          <img src={HomeImage} className="d-block w-50 center" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={MainImage} className="d-block w-50 center" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Laws} className="d-block w-50 center" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
