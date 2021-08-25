import "./Clock.css";
import clockImage from "./assets/clock.jpg";

const getCurrentTime = (showMinutes, showSeconds) => {
  const currentDate = new Date();
  let currentTime = `${currentDate.getHours()}h`;
  if (showMinutes) {
    currentTime += ` ${currentDate.getMinutes()}min`;
  }
  if (showSeconds) {
    currentTime += ` ${currentDate.getSeconds()}s`;
  }
  return currentTime;
};

export default function Clock({ showMinutes, showSeconds }) {
  return (
    <div className="Clock">
      <img src={clockImage} alt="" />
      <p>The current time is {getCurrentTime(showMinutes, showSeconds)}</p>
    </div>
  );
}
