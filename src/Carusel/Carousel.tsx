import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/KopDub.jpg';
import gh1 from '../assets/KopDub2.jpg';
import gh2 from '../assets/KopDub3.jpg';
import gh3 from '../assets/KopDub4.jpg';
import gh4 from '../assets/KopDub5.jpg';
import gh5 from '../assets/KopDub6.jpg';
import gh6 from '../assets/KopDub7.jpg';
import gh7 from '../assets/KopDub8.jpg';
import style from './Carusel.module.scss'

export function Carusrel1 () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
  };

  return (
    <Slider {...settings} className={style.container}>
      <div className={style.img}>
        <img className={style.img} src={img} alt='slide-1' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh1} alt='slide-1' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh2} alt='slide-2' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh3} alt='slide-3' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh4} alt='slide-3' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh5} alt='slide-3' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh6} alt='slide-3' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh7} alt='slide-3' />
      </div>
    </Slider>
  );
};
