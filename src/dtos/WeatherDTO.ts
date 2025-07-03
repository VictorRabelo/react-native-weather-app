export interface WeatherDTO {
  name: string;
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
  };
}
