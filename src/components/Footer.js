import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h1 to="/" className="brand">
            KPCooking
          </h1>
          <div className="row">
            <div className="col-6-md mb-4 w-50">
              <h6>ABOUT US</h6>
              <span>
                <b>Address: </b>
              </span>
              <div className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
                nam.
              </div>
              <span>
                <b>Phone: </b>
              </span>
              <div className="text-muted">(5555)-5555-555</div>
            </div>
            <div className="col-6-md">
              <form>
                <h6>GET FRESH NEWS FROM KPCooking</h6>
                <input type="text" placeholder="Enter Email" />
                <input type="button" value="Subscribe" />
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="social">
                <a href="https://www.instagram.com">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://www.whatsapp.com">
                  <i className="fab fa-whatsapp fa-2x"></i>
                </a>
                <a href="https://www.twitter.com">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
