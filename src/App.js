// import logo from "./logo.svg";
import React, { lazy, Suspense } from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import "./App.css";
import TopNav from "./components/topnav/TopNav";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";

const Upload = lazy(() => import("./components/upload/Upload"));
const Patient = lazy(() => import("./components/patient/Patient"));
const Patients = lazy(() => import("./components/patients/Patients"));

const renderSpinner = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" role="status">
        {" "}
      </Spinner>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Container>
        <div className="App">
          <Suspense fallback={renderSpinner()}>
            <Router>
              <TopNav></TopNav>
              <Switch>
                <Route path="/patients">
                  <Patients></Patients>
                </Route>
                <Route path="/patient/:id">
                  <Patient></Patient>
                </Route>
                <Route path="/patient">
                  <Patient></Patient>
                </Route>
                <Route path="/upload">
                  <Upload></Upload>
                </Route>
                <Route path="/">
                  <Login></Login>
                </Route>
              </Switch>
              <Footer></Footer>
            </Router>
          </Suspense>
        </div>
      </Container>
    </>
  );
};

export default App;
