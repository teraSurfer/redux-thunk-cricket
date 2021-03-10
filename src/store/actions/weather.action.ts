import { getCurrentWeatherData } from "../../services";
import { WeatherAction, WeatherDispatch, WeatherInfo, WeatherInput } from "../../types";
import { SET_WEATHER_INFO } from "../action-types";

const verdicts = (input: string) => {
    switch (true) {
        case input.startsWith("01"): return "Let's play!"
        case input.startsWith("02"): return "Great!"
        case input.startsWith("03"): return "Meh~"
        case input.startsWith("04"): return "Probably \u{1F625}"
        case input.startsWith("09"): return "Uh oh..."
        case input.startsWith("10"): return "Oh no!"
        case input.startsWith("11"): return "You only live once"
        case input.startsWith("13"): return "Nope."
        case input.startsWith("50"): return "Maybe?"
        default: return "I don't know?"
    }
}

export const setWeatherInfo = async (
    weatherInput: WeatherInput,
    dispatch: WeatherDispatch) => {
    // make api call and send response.
    try {
        const resp = await getCurrentWeatherData(weatherInput.location)
        console.log(resp, dispatch);
        dispatch({
            type: SET_WEATHER_INFO,
            payload: {
                forecast: resp.data.weather[0].description,
                icon: resp.data.weather[0].icon,
                temp: resp.data.main.temp,
                verdict: verdicts(resp.data.weather[0].icon),
                location: resp.data.name
            }
        });
    } catch (err) {
        console.log(err);
    }
}
