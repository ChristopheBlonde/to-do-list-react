import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Task = (props) => {
  const { tasks, setTasks } = props;
  const token =
    "iNC47naNC041BhR0ZW0xzCpDmwUiio1VwGPCmwI5GKBINEfVTNjMDMhciRGlTOtM";
  const handleCheckBox = (index) => {
    const arrTaskChecked = [...tasks];
    /* Change boolean for checked */
    arrTaskChecked[index].checkBox = !arrTaskChecked[index].checkBox;
    /* filter to down task checked */
    arrTaskChecked.sort((x, y) =>
      x.checkBox === y.checkBox ? 0 : x.checkBox ? 1 : -1
    );
    /* Send change in BDD */
    axios.put(
      `http://localhost:5000/task/update/${arrTaskChecked[index]._id}`,
      arrTaskChecked[index],
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setTasks(arrTaskChecked);
  };

  const handleDeleteTask = (index) => {
    const arr = [...tasks];
    console.log(arr);
    /* Delete in BDD */
    const token =
      "iNC47naNC041BhR0ZW0xzCpDmwUiio1VwGPCmwI5GKBINEfVTNjMDMhciRGlTOtM";
    axios.delete(
      `http://localhost:5000/task/delete/${arr[index]._id}`,

      {
        headers: { Authorization: `Bearer ${token}` },
      },
      arr[index]
    );
    /* Delete Task */
    arr.splice(index, 1);
    return setTasks(arr);
  };

  return (
    <section>
      {tasks.map((elem, index) => {
        return (
          <div key={index} className="writedTask">
            <input
              checked={elem.checkBox}
              onChange={() => handleCheckBox(index)}
              type="checkbox"
            ></input>

            {elem.checkBox ? (
              <p style={{ textDecorationLine: "line-through" }}>{elem.text}</p>
            ) : (
              <p>{elem.text}</p>
            )}
            <FontAwesomeIcon
              onClick={() => handleDeleteTask(index)}
              className="icon-task"
              icon="trash"
            />
          </div>
        );
      })}
    </section>
  );
};
export default Task;
