import React from 'react';
import classes from './Footer.module.scss';
import img from '../assets/GerbNN.png';
import Nastr from '../assets/water_chaika.png'
import { routes } from '../utils/constants/routes';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <Link to={routes.MAIN}><img className={classes.footer__img} src={img} alt="" /></Link>
      {/* <div className={classes.footer__menuWrap}> */}
        {/* <div className={classes.footer__menu}> */}
        <Link className={classes.footer__menu__title} to={routes.MAIN}>
            Природа Сормово
            <br />
            и пригорода
          </Link>
          {/* <div className={classes.footer__menu__list}> */}
          <p className={classes.footer__menu__list_a}> Авторское право © 2023. Хорошей погоды и позитивного настроения.</p>
          <img className={classes.footer__img1} src={Nastr} alt="" />
        {/* </div> */}
      {/* </div> */}
      </div>
  // </div>
  );
};
