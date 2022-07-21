import React from "react";
import Slider from "react-slick";
const Quotes = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="q">
      <h4>“We love Dukaan.”</h4>
      <h5>
        Okay, we wrote these testimonials on their behalf. But you get the idea
      </h5>
      <Slider {...settings}>
        <div className="q-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="88"
            height="88"
            fill="none"
            viewBox="0 0 88 88"
          >
            <path
              fill="#146EB4"
              d="M88 41.32H66.656c.365 15.838 4.777 17.635 10.318 18.149l2.137.27v17.415l-2.463-.134c-7.236-.415-15.236-1.743-20.573-8.452-4.679-5.88-6.742-15.489-6.742-30.238V11H88v30.32zM38.668 11v30.32h-21.06c.366 15.838 4.635 17.635 10.176 18.149l1.995.27v17.415l-2.32-.134c-7.237-.415-15.308-1.743-20.646-8.452C2.135 62.688.001 53.08.001 38.33V11h38.667z"
            />
          </svg>
          <h1>
            “When I’m old and dying, I plan to look back on my life and say
            ‘wow, that was an adventure,’ not ‘wow, I sure felt safe.”
          </h1>
          <h2>
            Tom Preston-Werner, <span>Github Co-founder</span>
          </h2>
        </div>
        <div className="q-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="88"
            height="88"
            fill="none"
            viewBox="0 0 88 88"
          >
            <path
              fill="#146EB4"
              d="M88 41.32H66.656c.365 15.838 4.777 17.635 10.318 18.149l2.137.27v17.415l-2.463-.134c-7.236-.415-15.236-1.743-20.573-8.452-4.679-5.88-6.742-15.489-6.742-30.238V11H88v30.32zM38.668 11v30.32h-21.06c.366 15.838 4.635 17.635 10.176 18.149l1.995.27v17.415l-2.32-.134c-7.237-.415-15.308-1.743-20.646-8.452C2.135 62.688.001 53.08.001 38.33V11h38.667z"
            />
          </svg>
          <h1>
            “Your reputation is more important than your paycheck, and your
            integrity is worth more than your career. ”
          </h1>
          <h2>
            Ryan Freitas,
            <span>About.com Co-founder</span>
          </h2>
        </div>
        <div className="q-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="88"
            height="88"
            fill="none"
            viewBox="0 0 88 88"
          >
            <path
              fill="#146EB4"
              d="M88 41.32H66.656c.365 15.838 4.777 17.635 10.318 18.149l2.137.27v17.415l-2.463-.134c-7.236-.415-15.236-1.743-20.573-8.452-4.679-5.88-6.742-15.489-6.742-30.238V11H88v30.32zM38.668 11v30.32h-21.06c.366 15.838 4.635 17.635 10.176 18.149l1.995.27v17.415l-2.32-.134c-7.237-.415-15.308-1.743-20.646-8.452C2.135 62.688.001 53.08.001 38.33V11h38.667z"
            />
          </svg>
          <h1>
            “Timing, perseverance, and ten years of trying will eventually make
            you look like an overnight success.”
          </h1>
          <h2>
            Biz Stone,
            <span>Twitter co-founder</span>
          </h2>
        </div>
      </Slider>
    </div>
  );
};

export default Quotes;
