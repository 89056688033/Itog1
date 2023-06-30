import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './Carusel2.module.scss'
import gh8 from '../assets/reppelent.jpg';
import gh9 from '../assets/rukzak1.png';
import gh10 from '../assets/Knife.png';
import gh11 from '../assets/tyrist(2).png';
import gh12 from '../assets/water.jpg';
import gh13 from '../assets/Apt.png';
import gh14 from '../assets/fonar.png';

export function Carusrel2 () {
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
        <img className={style.img} src={gh8} alt='slide-1' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh9} alt='slide-1' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh10} alt='slide-2' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh11} alt='slide-3' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh12} alt='slide-3' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh13} alt='slide-3' />
      </div>
      <div className={style.img}>
        <img className={style.img} src={gh14} alt='slide-3' />
      </div>
    </Slider>
  );
};
