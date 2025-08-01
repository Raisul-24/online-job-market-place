import React from 'react';
import carousel1 from '../../../assets/images/carousel1.jpg';
import carousel2 from '../../../assets/images/carousel2.jpg';           
import carousel3 from '../../../assets/images/carousel3.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full ">
    <img
      src={carousel1}
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src={carousel2}
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src={carousel3}
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
</div>
        </div>
    );
};

export default Banner;