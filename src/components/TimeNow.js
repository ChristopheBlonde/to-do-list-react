import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TimeNow = (props) => {
  /* Destructuring props */

  const { modeColor, setModeColor } = props;

  /* fonction to switch dark/light */
  const handleModeColor = () => {
    if (modeColor) {
      return setModeColor(false);
    } else {
      return setModeColor(true);
    }
  };
  let mode = modeColor ? "moon" : "sun";
  let iconMode = modeColor ? "modeColorLight" : "modeColorDark";

  /* Date now */
  /* Variables */

  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  /* Find Year */
  const presentYear = date.getFullYear();
  /* Find number of month */
  const presentDayNum = date.getDate();
  const arrMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let presentDay = "";
  let presentMonth = "";

  /* Find day in week */

  switch (day) {
    case 0:
      presentDay = "Sunday";
      break;
    case 1:
      presentDay = "Monday";
      break;
    case 2:
      presentDay = "Tuesday";
      break;
    case 3:
      presentDay = "Wednesday";
      break;
    case 4:
      presentDay = "Thursday";
      break;
    case 5:
      presentDay = "Friday";
      break;
    case 6:
      presentDay = "saturday";
      break;
    default:
      presentDay = "";
  }

  /* Find month */

  for (let i = 0; i < arrMonth.length; i++) {
    if (i === month) {
      presentMonth = arrMonth[i];
    }
  }

  return (
    <section>
      <div className="setTime">
        {presentDay} {presentDayNum} - {presentMonth} - {presentYear}
      </div>
      <FontAwesomeIcon
        className={iconMode}
        icon={mode}
        onClick={handleModeColor}
      />
    </section>
  );
};

export default TimeNow;
