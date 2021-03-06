import { connect } from "react-redux";
import { WeatherDispatch, WeatherInput } from "../types";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { setWeatherInfo as setWeatherInfoAction } from "../store/actions/weather.action";
import { useState } from "react";

interface WeatherInputProps {
  setWeatherInfoProps: (weatherInput: WeatherInput) => void;
}

const WeatherInputComponent = ({ setWeatherInfoProps }: WeatherInputProps) => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setLocation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWeatherInfoProps({location});
  };

  return (
    <Card>
      <CardHeader>Enter Location</CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="location">Location</Label>
            <Input placeholder="City Name" onChange={handleLocationChange} id="location" type="text" />
          </FormGroup>
          <Button color="dark" type="submit">Can I Play?</Button>
        </Form>
      </CardBody>
    </Card>
  );
};

const mapDispatchToProps = (dispatch: WeatherDispatch) => {
  return {
    setWeatherInfoProps: (weatherInput: WeatherInput) =>
      setWeatherInfoAction(weatherInput, dispatch),
  };
};

export default connect(undefined, mapDispatchToProps)(WeatherInputComponent);
