import { connect } from "react-redux";
import { Card, CardBody, Col } from "reactstrap";
import { WeatherInfo } from "../types";

interface VerdictProps {
  weather: WeatherInfo;
}

const Verdict = ({ weather }: VerdictProps) => {
  return (
    <Card>
      {weather.forecast && (
        <CardBody>
          <Col className="text-center">
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            />
            <h4>{weather.verdict}</h4>
            <p>{weather.forecast}</p>
            <h4 className="text-danger">{weather.temp} &deg;C</h4>
            <strong>{weather.location}</strong>
          </Col>
        </CardBody>
      )}
      {!weather.forecast && (
        <CardBody className="d-flex justify-content-center">
          <h4>Search Something</h4>
        </CardBody>
      )}
    </Card>
  );
};

const mapStateToProps = (state: any) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps)(Verdict);
