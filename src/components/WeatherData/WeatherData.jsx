const WeatherData = (props) => {
  const { day, conditions, time } = props;
  return (
    <>
      <h2>{day}</h2>
      <p>
        <span>conditions: </span>
        {conditions}
      </p>
      <p>
        <span>time: </span>
        {time}
      </p>
    </>
  );
};

export default WeatherData;
