// import logo from "./logo.svg";
import React from "react";
import { DATA } from "../../constants/en";
import { Button, Form, Row, Col } from "react-bootstrap";

const Patient = () => {
  return (
    <>
      <h4 className="text-center mar-top-bot-2rem">{DATA.msgAddPatient}</h4>
      <hr />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            First Name
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              size="sm"
            />
          </Col>
          <Form.Label as={Col} sm="2">
            Last Name
          </Form.Label>
          <Col sm="4">
            <Form.Control type="text" placeholder="Enter Last Name" size="sm" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Age
          </Form.Label>
          <Col sm="4">
            <Form.Control type="number" placeholder="Enter Age" size="sm" />
          </Col>
          <Form.Label as={Col} sm="2">
            Gender{" "}
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Mobile
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="number"
              placeholder="Enter Mobile No"
              size="sm"
            />
          </Col>
          <Form.Label as={Col} sm="2">
            Email Id
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="email"
              placeholder="Enter Email Id"
              size="sm"
              // required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Address
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Enter Address" size="sm" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            State
          </Form.Label>
          <Col sm="4">
            <Form.Control type="text" placeholder="Enter State" size="sm" />
          </Col>
          <Form.Label as={Col} sm="2">
            City
          </Form.Label>
          <Col sm="4">
            <Form.Control type="text" placeholder="Enter City" size="sm" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Zip
          </Form.Label>
          <Col sm="4">
            <Form.Control type="number" placeholder="Enter Zip" size="sm" />
          </Col>
          <Form.Label as={Col} sm="2">
            Weight
          </Form.Label>
          <Col sm="4">
            <Form.Control type="text" placeholder="Enter Weight" size="sm" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Blood
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="text"
              placeholder="Enter Blood Group"
              size="sm"
            />
          </Col>
          <Form.Label as={Col} sm="2">
            HB Level
          </Form.Label>
          <Col sm="4">
            <Form.Control type="text" placeholder="Enter HB Level" size="sm" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Admission Date
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="date"
              placeholder="Enter Admission Date"
              size="sm"
            />
          </Col>
          <Form.Label as={Col} sm="2">
            Discharge Date
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="date"
              placeholder="Enter Discharge Date"
              size="sm"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Willing to donate?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has covid recovered?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has Cancer patient?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has HIV?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has Hepatitis?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has BP?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has HTLV1?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has Heart Ailment?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has Kidney Ailment?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has Pregnant in Past?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has TB?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has Tatto?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has Surgery?
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" size="sm">
            Submit
          </Button>{" "}
          <Button variant="secondary" type="reset" size="sm">
            Reset
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Patient;
