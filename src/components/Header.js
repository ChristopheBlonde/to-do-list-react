import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeNow from "./TimeNow";

const Header = (props) => {
  const { modeColor, setModeColor } = props;
  return (
    <header>
      <div className="title">
        <FontAwesomeIcon className="icon-header" icon={"list-alt"} />
        <h1>To Do List</h1>
      </div>
      <div>
        <TimeNow modeColor={modeColor} setModeColor={setModeColor} />
      </div>
    </header>
  );
};

export default Header;
