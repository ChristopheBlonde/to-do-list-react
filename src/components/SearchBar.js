import { useState } from "react";

const SearchBar = (props) => {
  /* Destructuring props */

  const { tasks, setTasks } = props;

  /* State for search Task controled */
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    const searchTask = [];
    const oldtasks = [...tasks];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].text.indexOf(value) !== -1) {
        searchTask.push(tasks[i]);
      }
    }
    setSearch(value);
    return searchTask ? setTasks(searchTask) : setTasks(oldtasks);
    // const oldtasks = [...tasks];
    // let check = false;
    // if (tasks) {
    //   tasks.map((elem) => {
    //     if (elem.text.indexOf(value) !== -1) {
    //       searchTask.push(elem);
    //     }
    //   });
    // for (let i = 0; i < tasks.length; i++) {
    //   for (let j = 0; j < searchTask.length; j++) {
    //     if (searchTask[j] === tasks[i]) {
    //       check = true;
    //     }
    //     if (j === searchTask.length - 1) {
    //       if (!check) {
    //         searchTask.push(tasks[i]);
    //       } else {
    //         check = false;
    //       }
    //     }
    //   }
    // }
    // }
    // setSearch(value);
    // setTasks(searchTask);
  };

  return (
    <div className="search">
      <input
        onChange={handleSearch}
        value={search}
        type="text"
        placeholder="Search a Task"
      />
    </div>
  );
};

export default SearchBar;
