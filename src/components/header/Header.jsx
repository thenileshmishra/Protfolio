import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          NILESH
        </a>

        <div className="nav__menu">
          <ul className="nav__item grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact Portfolio
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            // onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle">
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;

// const Header = () => {
//   /*=============== Toggle Menu ===============*/
//   const [Toggle, showMenu] = useState(false);

//   return (
//     //
//
//         <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>

//         </div>

//         <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
//
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
