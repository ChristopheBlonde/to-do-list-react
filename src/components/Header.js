import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon className="icon-header" icon={"list-alt"} />
      <h1>To Do List</h1>
    </header>
  );
};

export default Header;
