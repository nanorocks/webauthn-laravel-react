import React from "react";
import { Row, Col, Card, CardBody, Container, Button, Form } from "reactstrap";
import { useState } from "react";

export default function Landing() {
  const [loginEmail, setLoginEmail] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("login");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("register");
  };

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">WebAuthn implementation</h1>
          <p className="col-md-8 fs-4">
            Powered by React as FE tehnology and PHP Laravel as BE. This is an
            example applications for testing scenario.
          </p>
          <a
            href="https://webauthn.io/"
            className="btn btn-primary btn-lg"
            type="button"
          >
            About WebAuthn standard
          </a>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={4}>
            <Card className="border-0 bg-light">
              <CardBody>
                <Form onSubmit={(e) => handleLogin(e)}>
                  <h2> Login </h2>
                  <div className="mb-3">
                    <label htmlFor="loginEamil" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="loginEamil"
                      placeholder="name@example.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <Button type="submit" className="btn btn-success btn-sm">
                      Login
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className="offset-md-4">
            <Card className="border-0 bg-light">
              <CardBody>
                <Form onSubmit={(e) => handleRegister(e)}>
                  <h2> Register </h2>
                  <div className="mb-3">
                    <label htmlFor="registerEmail" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="registerEmail"
                      placeholder="name@example.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <Button className="btn btn-danger btn-sm">Register</Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
