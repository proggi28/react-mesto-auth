import React from "react";
import { Link } from "react-router-dom";

export default function HeaderLogin() {
  return (
    <div className="header__sign">
      <Link exact to="/sign-in" className="header__link link">
        Войти
      </Link>
    </div>
  );
}