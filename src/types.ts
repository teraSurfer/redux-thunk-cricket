
export interface WeatherInfo {
    location: string;
    forecast: string;
    verdict: string | undefined;
    icon: string;
}

export interface WeatherInput {
    location: string;
}

export interface WeatherAction {
    type: string;
    payload: WeatherInfo;
}

export type WeatherDispatch = (action: WeatherAction) => void;