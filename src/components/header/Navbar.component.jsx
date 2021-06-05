import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { SearchResults } from "../../providers/SearchResults";
import CustomInput from "../custom-input/CustomInput.component";
import "./Navbar.css";
import GoogleAuth from "../join/GoogleAuth.component";
import Modal from "../join/Modal.component";
import { ReactComponent as ArticleLogo } from "../../assets/article.svg";

const Navbar = () => {
  const { search, onHandleChange } = useContext(SearchResults);

  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/${search}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg py-2">
        <div className="container">
          <Link to="/" className="navbar-brand">
            KPCooking
          </Link>
          <div onSubmit={onSubmit}>
            <CustomInput
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
                <Link className="nav-link" to="/">
                  <GoogleAuth />
                </Link>
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
