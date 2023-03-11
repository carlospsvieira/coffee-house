import React from "react";
import Slider from "react-slick";

function News() {
  // Slider settings //
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section id="news">
      <div className="news-container">
        <h1>Coffee News</h1>
        <h2>Be The First to Know</h2>
        <Slider {...settings} className="slider">
          <article className="news-card">
            <img
              src="https://images.pexels.com/photos/4427815/pexels-photo-4427815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>Feb 21</span>
              <span>Duis aute irure dolor in reprehenderit in voluptate.</span>
            </div>
          </article>
          <article className="news-card">
            <img
              src="https://images.pexels.com/photos/7412066/pexels-photo-7412066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>Feb 18</span>
              <span>Duis aute irure dolor in reprehenderit in voluptate.</span>
            </div>
          </article>
          <article className="news-card">
            <img
              src="https://images.pexels.com/photos/7487360/pexels-photo-7487360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>Feb 16</span>
              <span>Duis aute irure dolor in reprehenderit in voluptate.</span>
            </div>
          </article>
          <article className="news-card">
            <img
              src="https://images.pexels.com/photos/3309748/pexels-photo-3309748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>Feb 14</span>
              <span>Duis aute irure dolor in reprehenderit in voluptate.</span>
            </div>
          </article>
          <article className="news-card">
            <img
              src="https://images.pexels.com/photos/2159106/pexels-photo-2159106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>Feb 12</span>
              <span>Duis aute irure dolor in reprehenderit in voluptate.</span>
            </div>
          </article>
          <article className="news-card">
            <img
              src="https://images.pexels.com/photos/4349828/pexels-photo-4349828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>Feb 10</span>
              <span>Duis aute irure dolor in reprehenderit in voluptate.</span>
            </div>
          </article>
        </Slider>
      </div>
    </section>
  );
}

export default News;
