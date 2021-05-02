import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright mt-1">
          <span className="text-light">Designed and Developed by Taieb Hossain</span>
        </Col>
        <Col md="4" className="footer-copywright mt-1">
          <span className="text-light">Copyright © {year} All rights reserved</span>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/hossain909"
                style={{ color: "White" }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/taieb.hossain.12/"
                style={{ color: "White" }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/taieb-hossain-a050a0211/"
                style={{ color: "White" }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
