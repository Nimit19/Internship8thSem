import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

import classes from "./Header.module.css";

const Header = ({onShowCart}) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClickCartButton = {onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Meals Image' />
      </div>
    </>
  );
};

export default Header;
