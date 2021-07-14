import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import Task from "./components/Task";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faListAlt,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

library.add(faListAlt, faTrash, faSun, faMoon);

function App() {
  /* State to add Task */
  const [submit, setSubmit] = useState([]);
  /* State to control input task */
  const [taskInput, setTaskInput] = useState("");
  /* State to control checked task */
  const [checkBox, setCheckBox] = useState(false);
  /* State to switch dark/light */
  const [modeColor, setModeColor] = useState(true);
  /* effect function to flech data */
  const flechData = async () => {
    const token =
      "iNC47naNC041BhR0ZW0xzCpDmwUiio1VwGPCmwI5GKBINEfVTNjMDMhciRGlTOtM";
    const res = await axios.get("http://localhost:5000/task", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setSubmit(res.data);
  };

  useEffect(() => {
    flechData();
  }, []);

  return (
    <div className={modeColor ? "body" : "bodyDark"}>
      <div className="content">
        <Header modeColor={modeColor} setModeColor={setModeColor} />
        <SearchBar submit={submit} setSubmit={setSubmit} />
        <Task
          submit={submit}
          setSubmit={setSubmit}
          setCheckBox={setCheckBox}
          checkBox={checkBox}
        />
        <Form
          taskInput={taskInput}
          submit={submit}
          checkBox={checkBox}
          setSubmit={setSubmit}
          setTaskInput={setTaskInput}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
