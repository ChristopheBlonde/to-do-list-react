const Form = (props) => {
  const { submit, setSubmit, taskInput, setTaskInput, checkBox } = props;

  const handleSubmit = (event) => {
    const arrTask = [...submit];
    event.preventDefault();
    const text = { text: taskInput, checkBox: checkBox };
    arrTask.push(text);
    setSubmit(arrTask);
  };

  const handleTaskInput = (event) => {
    const value = event.target.value;
    setTaskInput(value);
  };

  return (
    <form onSubmit={handleSubmit} className="task">
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
