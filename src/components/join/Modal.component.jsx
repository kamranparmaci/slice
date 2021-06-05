import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth.component";
import SignIn from "./SignIn.component";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal fade" id="signInModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign In Chef</h5>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <GoogleAuth />
            <div className="divider">
              <span>OR</span>
            </div>
            <SignIn />
            <button className="btn btn-primary m-0" data-dismiss="modal">
              Sign In
            </button>
          </div>
          <div className="modal-footer">
            <Link to="/" data-dismiss="modal">
              No account yet? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
