// import logo from "./logo.svg";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Form, Spinner, Table } from "react-bootstrap";
import { DATA } from "../../constants/en";
import { API } from "../../constants/api";

const patientsList = [];
const donorsList = [];

const Donation = () => {
  const [patients, setPatients] = useState(patientsList);
  const [donors, setDonors] = useState(donorsList);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    Axios.post(`${API.listDonors}`)
      .then((res) => {
        if (res && res.data && res.data.statusCode === 200) {
          setLoading(false);
          if (typeof res.data.data === "string") {
            setMessage(res.data.data);
          } else {
            setDonors(res.data.data);
          }
        }
      })
      .catch((e) => {
        setLoading(false);
        setMessage("Donors: " + DATA.msgError);
      });

    Axios.post(`${API.listPatients}`, { page: 1, size: 10 })
      .then((res) => {
        if (res && res.data && res.data.statusCode === 200) {
          setLoading(false);
          if (typeof res.data.data === "string") {
            setMessage(res.data.data);
          } else {
            setPatients(res.data.data);
          }
        }
      })
      .catch((e) => {
        setLoading(false);
        setMessage("Patients: " + DATA.msgError);
      });
  }, []);

  const renderSpinner = () => {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status"></Spinner>
      </div>
    );
  };

  const showMessage = () => {
    return loading ? (
      renderSpinner()
    ) : message ? (
      <Alert variant={"primary"}>{message}</Alert>
    ) : null;
  };

  const closeDonationRequest = (patientId) => {
    setLoading(true);
    Axios.post(`${API.requestPlasma}/${patientId}`)
      .then((res) => {
        if (res && res.data && res.data.statusCode === 200) {
          setLoading(false);
          if (typeof res.data.data === "string") {
            setMessage(res.data.data);
          } else {
            setMessage("Donation request closed successfully");
          }
        }
      })
      .catch((e) => {
        setLoading(false);
        setMessage(DATA.msgError);
      });
  };

  const renderDonors = () => {
    if (donors) {
      return donors.map((donor, index) => {
        return <option value="Test">Test</option>;
      });
    }
  };

  const renderPatients = () => {
    if (patients) {
      return patients.map((patient, index) => {
        return (
          <tr key={patient.email}>
            <td>{index + 1}</td>
            <td>{patient.name}</td>
            <td>{patient.email}</td>
            <td>{patient.mobile}</td>
            <td>
              <Form.Control
                as="select"
                // value={state.bloodGroup}
                // onChange={(e) =>
                //   dispatch({ type: "bloodGroup", payload: e.target.value })
                // }
              >
                {renderDonors()}
              </Form.Control>
            </td>
            <td style={{ textAlign: "center" }}>
              <span
                className="link"
                onClick={() => closeDonationRequest(patient.id)}
              >
                Close Donation Request
              </span>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <>
      <h4 className="text-center mar-top-bot-2rem">{DATA.msgDonations}</h4>
      <hr />
      {showMessage()}
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Donars List</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>{renderPatients()}</tbody>
      </Table>
    </>
  );
};

export default Donation;
