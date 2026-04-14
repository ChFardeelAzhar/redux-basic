// in this folder we will hold all our components

import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="add-to-cart-wrapper">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqC5hRhFoWhXLcgpzIq5ldEQmjTYSHDw-eNw&s" />
      </div>
      <h1>Home component</h1>
      <div className="card-wrapper">
        <div className="img-wrapper item">
          <img src="https://img.tvcmall.com/dynamic/uploads/details/800x800_6613000199B-1.webp" />
        </div>

        <div className="text-wrapper item">
          <span>I Phone</span>

          <span>Price $2000</span>
        </div>

        <div className="btn-wrapper item"></div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Home;
