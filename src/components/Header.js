import Logo from "./Logo";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
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
  );
};

export default Header;
