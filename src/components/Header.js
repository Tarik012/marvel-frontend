import Logo from "./Logo";

import Search from "../components/Search";

import { Link } from "react-router-dom";

const Header = ({ title, setTitle }) => {
  return (
    <div className="header-container">
      <div className="search-container">
        <Search title={title} setTitle={setTitle} />
      </div>
      <div className="logo-nav-container">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <p>Personnages</p>
                </Link>
              </li>
              <li>
                <Link to="/comics">
                  <p>Comics</p>
                </Link>
              </li>
              <li>
                <Link to="/favoris">
                  <p>Favoris</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
