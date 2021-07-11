import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import Task from "./components/Task";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faListAlt, faTrash);

function App() {
  const [submit, setSubmit] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [checkBox, setCheckBox] = useState([...submit]);

  return (
    <div className="body">
      <Header />
      <Task submit={submit} setSubmit={setSubmit} setCheckBox={setCheckBox} />
      <Form
        taskInput={taskInput}
        submit={submit}
        checkBox={checkBox}
        setSubmit={setSubmit}
        setTaskInput={setTaskInput}
      />
      <Footer />
    </div>
  );
}

export default App;
