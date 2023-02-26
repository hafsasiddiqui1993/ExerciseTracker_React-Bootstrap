import React from "react";
import { Container, Row } from "react-bootstrap";
const Header = () => {
  return (
    <div className="header">
      <Container fluid>
        <Row> 
            <p className="headp">
              Hafsa
              <a className="signup" href="mailto:hege@example.com">Sign-up</a>
              <a className="signin" href="mailto:hege@example.com">Already a Member?</a>

            </p>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
