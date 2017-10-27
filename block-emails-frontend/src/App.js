import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Grid className="content">
        <Row>
          <Col xsOffset={8} xs={1} smOffset={10} className="toolbar">
            <Button bsStyle="primary">Login</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="header">
            <h1>Gmail Blocker</h1>
            <p className="lead">Permanently Block Unwanted Emails</p>
            <Button bsSize="large" bsStyle="success">
              Sign Up Now
            </Button>
          </Col>
        </Row>
        <Row className="details">
          <Col xs={12}>
            <hr />
          </Col>
          <Col xs={12} sm={10}>
            <h2>Why use this?</h2>
            <p className="lead">
              Gmail currently offers a way to automatically move certain emails
              to the Trash or Spam. This isn't good enough if you are tempted to
              check those folders. This service will instantly and permanently
              delete emails from certain email addresses.
            </p>
            <h2>Sooo... like when would I use this?</h2>
            <p className="lead">
              Ever blocked an ex and kept checking your Trash or Spam in Gmail?
              This will make sure that any messages they send you will be
              instantly gone forever. Temptation removed :)
            </p>
          </Col>
        </Row>
        <Row className="footer">
          <Col xs={12}>
            <hr />
          </Col>
          <Col xs={6}>
            <p>&copy; {new Date().getFullYear()} Golightly+</p>
          </Col>
          <Col xs={6}>
            <p className="text-right">
              <a href="https://golightlyplus.com/contact/">Contact</a>
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
