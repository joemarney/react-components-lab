import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";
import WeatherData from "../WeatherData/WeatherData.jsx";
import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  console.log(props);
  return (
    <div className="weather">
      <WeatherData {...props} />
      <WeatherIcon {...props} />
    </div>
  );
};

export default WeatherForecast;
