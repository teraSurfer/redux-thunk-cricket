import axios from "axios";

const ajax = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
});


export const getCurrentWeatherData = (location: string) => {
    console.log(process.env);
    return ajax.get(
        `/weather?q=${encodeURIComponent(location)}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
}

export default ajax;
