import axios from "axios";

const Form = (props) => {
  const { tasks, setTasks, taskInput, setTaskInput, checkBox } = props;

  const handleTasks = (event) => {
    event.preventDefault();
    /* Add task on form tasks  */
    if (taskInput) {
      const arrTask = [...tasks];
      const text = { text: taskInput, checkBox: checkBox };
      arrTask.push(text);
      /* Send in BDD */
      const token =
        "iNC47naNC041BhR0ZW0xzCpDmwUiio1VwGPCmwI5GKBINEfVTNjMDMhciRGlTOtM";
      axios.post("http://localhost:5000/task/add", text, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(arrTask);
      setTaskInput("");
    }
  };

  const handleTaskInput = (event) => {
    /* Control input value */
    const value = event.target.value;
    setTaskInput(value);
  };

  return (
    <form ontasks={handleTasks} className="task">
      <input
        value={taskInput}
        onChange={handleTaskInput}
        placeholder="new Task"
        type="text"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default Form;
