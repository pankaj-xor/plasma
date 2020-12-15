// import logo from "./logo.svg";
import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { DATA } from "../../constants/en";

const Login = () => {
  let history = useHistory();
  return (
    <Row>
      <Col
        sm={{ span: 4, offset: 4 }}
        md={{ span: 4, offset: 4 }}
        lg={{ span: 4, offset: 4 }}
      >
        <br />
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value="admin@plasma.com"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value="password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  history.push("/upload");
                }}
              >
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
