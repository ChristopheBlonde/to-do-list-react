import { useState } from "react";

const SearchBar = (props) => {
  /* Destructuring props */

  const { submit, setSubmit } = props;

  /* State for search Task controled */
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    const searchTask = [];
    const oldSubmit = [...submit];
    for (let i = 0; i < submit.length; i++) {
      if (submit[i].text.indexOf(value) !== -1) {
        searchTask.push(submit[i]);
      }
    }
    setSearch(value);
    return searchTask ? setSubmit(searchTask) : setSubmit(oldSubmit);
    // const oldSubmit = [...submit];
    // let check = false;
    // if (submit) {
    //   submit.map((elem) => {
    //     if (elem.text.indexOf(value) !== -1) {
    //       searchTask.push(elem);
    //     }
    //   });
    // for (let i = 0; i < submit.length; i++) {
    //   for (let j = 0; j < searchTask.length; j++) {
    //     if (searchTask[j] === submit[i]) {
    //       check = true;
    //     }
    //     if (j === searchTask.length - 1) {
    //       if (!check) {
    //         searchTask.push(submit[i]);
    //       } else {
    //         check = false;
    //       }
    //     }
    //   }
    // }
    // }
    // setSearch(value);
    // setSubmit(searchTask);
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
