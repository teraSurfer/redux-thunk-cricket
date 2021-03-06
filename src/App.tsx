import React from "react";
import { Container, Row, Col } from "reactstrap";
import Verdict from "./components/Verdict";
import WeatherInput from "./components/WeatherInput";

function App() {
  return (
    <Container>
      <h4 className="text-center mt-4">Can I Play Cricket Today?</h4>
      <Row className="d-flex justify-content-center mt-4">
        <Col>
          <WeatherInput />
        </Col>
        <Col>
          <Verdict />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
