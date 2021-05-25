import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { SearchResults } from "../../providers/SearchResults";
import Search from "../Search";
import "./Navbar.css";
import GoogleAuth from "../join/GoogleAuth";
import Modal from "../join/Modal";
import { ReactComponent as ArticleLogo } from "../../assets/article.svg";

const Navbar = () => {
  const { search, onHandleChange } = useContext(SearchResults);

  let history = useHistory();

  return (
    <>
      <nav className="navbar navbar-expand-lg py-2">
        <div className="container">
          <Link to="/" className="navbar-brand">
            KPCooking
          </Link>
          <div onSubmit={() => history.push(`/${search}`)}>
            <Search
              type="text"
              className="anime search-input"
              placeholder="Search a Food"
              onChange={onHandleChange}
              value={search}
            />
          </div>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars fa-2x"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/articles" className="nav-link">
                  <ArticleLogo />
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <GoogleAuth />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal />
    </>
  );
};

export default Navbar;
