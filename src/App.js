// import logo from "./logo.svg";
import React, { lazy, Suspense } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import "./App.css";
import TopNav from "./components/topnav/TopNav";
import Footer from "./components/footer/Footer";

const Upload = lazy(() => import("./components/upload/Upload"));
const Patient = lazy(() => import("./components/patient/Patient"));

const App = () => {
  return (
    <>
      <Container>
        <div className="App">
          <Suspense
            fallback={
              <Spinner animation="border" role="status">
                {" "}
              </Spinner>
            }
          >
            <Router>
              <TopNav></TopNav>
              <Switch>
                <Route path="/upload">
                  <Upload></Upload>
                </Route>
                <Route path="/addPatient">
                  <Patient></Patient>
                </Route>
                <Route path="/">
                  <Upload></Upload>
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