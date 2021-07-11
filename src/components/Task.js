import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  const { submit, setSubmit, setCheckBox } = props;

  const handleCheckBox = (event) => {
    const index = event.target.value;
    const arrTaskChecked = [...submit];
    if (!arrTaskChecked[index].checkBox) {
      arrTaskChecked[index].checkBox = true;
      setCheckBox(arrTaskChecked);
    } else {
      arrTaskChecked[index].checkBox = false;
      setCheckBox(arrTaskChecked);
    }
  };

  const handleDeleteTask = (event) => {
    const arr = [...submit];
    const newArr = [];
    arr.map((elem) => {
      if (event.text !== elem.text) {
        newArr.push(elem);
      }
      return newArr;
    });
    setSubmit(newArr);
  };

  return (
    <section>
      {submit.map((elem, index) => {
        return (
          <div key={index} className="writedTask">
            <input
              value={index}
              onChange={handleCheckBox}
              type="checkbox"
            ></input>

            {!elem.checkBox ? (
              <p style={{ textDecorationLine: "line-through" }}>{elem.text}</p>
            ) : (
              <p>{elem.text}</p>
            )}
            <FontAwesomeIcon
              value={index}
              onClick={() => handleDeleteTask(submit[index])}
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
