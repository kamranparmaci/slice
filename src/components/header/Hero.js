import "./Hero.css";

import Modal from "../join/Modal";

const Hero = () => {
  return (
    <>
      <div className="hero d-flex flex-column text-center">
        <h1 className="hero-header">CAN YOU COOK?</h1>
        <button
          className="btn btn-one btn-lg"
          data-toggle="modal"
          data-target="#signInModal"
        >
          GET STARTED
        </button>
      </div>
      <Modal />
    </>
  );
};

export default Hero;
