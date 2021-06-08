import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../images/slide-1.jpg";
import slide2 from "../../images/slide-2.jpg";
import slide3 from "../../images/slide-3.jpg";
import style from "./Home.module.css";

function Home(props) {

  return (
    <div>
      <Carousel className={style.mainCarousel}>
        <Carousel.Item className={style.slideItem}>
          <img className={style.slidePhoto} src={slide1} alt="slide-1" />
          <Carousel.Caption>
            <h2>Pendants</h2>
            <a
              type="button"
              className="btn btn-info"
              href="/shop/pendants"
            >
              See More
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.slideItem}>
          <img className={style.slidePhoto} src={slide2} alt="slide-2" />
          <Carousel.Caption>
            <h2>Earrings</h2>
            <a
              type="button"
              className="btn btn-info"
              href="/shop/earrings"
            >
              See More
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.slideItem}>
          <img className={style.slidePhoto} src={slide3} alt="slide-3" />
          <Carousel.Caption>
            <h2>Brooches</h2>
            <a
              type="button"
              className="btn btn-info"
              href="/shop/brooches"
            >
              See More
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
