import slider1 from '../imgs/slider1.webp'
import slider2 from '../imgs/slider2.webp'
import slider3 from '../imgs/slider3.webp'

export const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider1} className="d-block w-100 slider-img" alt="fail" />
        </div>
        <div className="carousel-item">
          <img src={slider2} className="d-block w-100 slider-img" alt="fail" />
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100 slider-img" alt="fail" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
