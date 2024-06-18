import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
export const ToDoForm = ({
  inputValue,
  setInputValue,
  setToDoArray,
  ToDoArray,
  setCompletedStatus,
  setPendingStatus,
  setEditStatus,
  EditStatus,
  EditId,
}) => {
  const changeInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const addtask = (event) => {
    event.preventDefault();
    if (EditStatus) {
      setToDoArray(
        ToDoArray.map((item) => {
          if (EditId === item.id) {
            return { ...item, task: inputValue };
          } else {
            return item;
          }
        })
      );
      setEditStatus(false);
      setInputValue("");
    } else {
      setToDoArray([
        ...ToDoArray,
        { task: inputValue, id: uuidv4(), completed: false },
      ]);
      console.log(ToDoArray);
      setInputValue("");
    }
  };

  const changeCompletedTask = (event) => {
    if (event.target.checked) {
      setCompletedStatus(1);
    } else {
      setCompletedStatus(0);
    }
  };

  const changePendingTask = (event) => {
    if (event.target.checked) {
      setPendingStatus(1);
    } else {
      setPendingStatus(0);
    }
  };
  return (
    <>
      <form onSubmit={addtask}>
        <input
          type="text"
          value={inputValue}
          onChange={changeInputValue}
          required
        ></input>
        <button type="submit">{EditStatus ? <CiEdit /> : <IoMdAdd />}</button>
      </form>
      <label className="select">
        Completed
        <input type="checkbox" onChange={changeCompletedTask}></input>
      </label>
      <label className="select">
        Pending <input type="checkbox" onChange={changePendingTask}></input>
      </label>
    </>
  );
};
