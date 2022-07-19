import React from "react";
import Blogimg from "../img/blog.jpg";
import Blogimg2 from "../img/blog2.jpg";
import Blogimg3 from "../img/blog3.jpg";
const Blog = () => {
  return (
    <div className="blog">
        <h6>Grow your online store. Learn the tips and tricks from experts.</h6>
      <div className="blog-container">
        <div className="blog-items">
          <div className="blog-items-img">
            <img src={Blogimg} className="blog-items-pic" />
          </div>
          <div className="blog-items-content">
            <h1>Ecommerce</h1>
            <p>9 best Ecommerce plateforms for startups-detailed comparison</p>
          </div>
        </div>
        <div className="blog-items">
          <div className="blog-items-img">
            <img src={Blogimg2} className="blog-items-pic" />
          </div>
          <div className="blog-items-content">
            <h1>Ecommerce</h1>
            <p>9 best Ecommerce plateforms for startups-detailed comparison</p>
          </div>
        </div>
        <div className="blog-items">
          <div className="blog-items-img">
            <img src={Blogimg3} className="blog-items-pic" />
          </div>
          <div className="blog-items-content">
            <h1>Ecommerce</h1>
            <p>9 best Ecommerce plateforms for startups-detailed comparison</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
