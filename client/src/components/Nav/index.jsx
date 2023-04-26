import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css';
import img from '../../img/dog.png';
import { StyledLink } from '../StyledLink';

function Nav() {
  return (
    <header className={style.header}>
      <NavLink to="/home">
        <div className={style.logo}>
          <img className={style.img} src={img} alt="dog icon" />
          <h1 className={style.title}>HENRY DOGS</h1>
        </div>
      </NavLink>
      <nav className={style.nav}>
        <StyledLink to="/home">INICIO</StyledLink>
        {/* <StyledLink to="/favorite">FAVORITOS</StyledLink> */}
        <StyledLink to="/form">AGREGAR</StyledLink>
      </nav>
    </header>
  );
}

export default Nav;
