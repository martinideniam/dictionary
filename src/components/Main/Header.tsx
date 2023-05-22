// importing types
import { FC } from "react";

// importing hooks
import { useContext, useState } from "react";

// importing context
import { ThemeContext } from "../../contexts/ThemeContext";
import { FontContext } from "../../contexts/FontsContext";

// importing tools
import { NavLink } from "react-router-dom";

// importing assets
import "./styles/header-style.scss";
import logoIcon from "../../assets/logo.svg";
import searchIcon from "../../assets/icon-search.svg";
import arrowDownIcon from "../../assets/icon-arrow-down.svg";

// importing icons
import { MoonIcon } from "../Icons/Icons";

const Header: FC = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { font, changeFont } = useContext(FontContext);
  const [visible, setVisible] = useState(false);

  function changeVisible() {
    setVisible((prevVisible) => !prevVisible);
  }

  function modifyFont(newFont: string) {
    changeVisible();
    changeFont(newFont);
  }

  function displayFont(): string {
    switch (font) {
      case "sans-serif":
        return "Sans Serif";
        break;
      case "serif":
        return "Serif";
        break;
      default:
        return "Mono";
    }
  }

  return (
    <header className="header">
      <div className="container container--header">
        <nav className="header__nav">
          <div className="header__logo-container">
            <NavLink to="/">
              <img className="header__logo" src={logoIcon} alt="logo icon" />
            </NavLink>
          </div>
          <div className="header__font-choices">
            <div
              onClick={changeVisible}
              className="header__font-choice-container"
            >
              <p className="header__font-choice">{displayFont()}</p>
              <img src={arrowDownIcon} />
            </div>
            <div
              className={`header__font-choices-hidden ${
                visible ? "visible" : "hidden"
              }`}
            >
              <p
                onClick={() => modifyFont("sans-serif")}
                className="header__font sans"
              >
                Sans Serif
              </p>
              <p
                onClick={() => modifyFont("serif")}
                className="header__font serif"
              >
                Serif
              </p>
              <p
                onClick={() => modifyFont("mono")}
                className="header__font mono"
              >
                Mono
              </p>
            </div>
          </div>
          <span className="header__vertical-bar"></span>
          <div className="header__light-switch-container">
            <label className="header__toggle-label" htmlFor="light-toggle">
              <input
                onChange={changeTheme}
                type="checkbox"
                className="header__toggle-input"
                id="light-toggle"
                checked={theme === "light" ? false : true}
              />
            </label>
            <MoonIcon />
          </div>
        </nav>
        <form className="header__form">
          <input type="text" />
          <img src={searchIcon} alt="search icon" />
        </form>
      </div>
    </header>
  );
};

export default Header;
