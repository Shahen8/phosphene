import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../images/slide-1.jpg";
import slide2 from "../../images/slide-2.jpg";
import slide3 from "../../images/slide-3.jpg";
import style from "./Home.module.css";
import {Link } from "react-router-dom" 

function Home(props) {

  return (
    <div>
      <Carousel className={style.mainCarousel}>
        <Carousel.Item className={style.slideItem}>
          <img className={style.slidePhoto} src={slide1} alt="slide-1" />
          <Carousel.Caption>
            <h2>Pendants</h2>
            <Link
              type="button"
              className="btn btn-info"
              to="/shop/pendants"
            >
              See More
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.slideItem}>
          <img className={style.slidePhoto} src={slide2} alt="slide-2" />
          <Carousel.Caption>
            <h2>Earrings</h2>
            <Link
              type="button"
              className="btn btn-info"
              to="/shop/earrings"
            >
              See More
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.slideItem}>
          <img className={style.slidePhoto} src={slide3} alt="slide-3" />
          <Carousel.Caption>
            <h2>Brooches</h2>
            <Link
              type="button"
              className="btn btn-info"
              to="/shop/brooches"
            >
              See More
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
