import React from "react";
import "./Footer.scss";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <div className="line"></div>
      <div className="footer">
        <div className="top">
          <div className="item main">
            <div className="left">
              <div className="col1"></div>
              <div className="col2"></div>
              <h1>DataWarehouse</h1>
            </div>
            <span>
              <h2>Warehouse Society, 234</h2>
              <h2>Bahagia Ave Street PRBW 29281</h2>
            </span>
            <span>
              <h3>info@warehouse.project</h3>
              <h3>1-232-3434 (Main)</h3>
            </span>
          </div>
          <div className="item">
            <h2>About</h2>
            <h3>Profile</h3>
            <h3>Features</h3>
            <h3>Careers</h3>
            <h3>DW News</h3>
          </div>
          <div className="item">
            <h2>Help</h2>
            <h3>Support</h3>
            <h3>Sign up</h3>
            <h3>Guide</h3>
            <h3>Reports</h3>
            <h3>Q&A</h3>
          </div>
          <div className="item">
            <h2>Social Media</h2>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="copyright">
              © Datawarehouse™, 2020. All rights reserved.
              <br />
              Company Registration Number: 21479524.
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
