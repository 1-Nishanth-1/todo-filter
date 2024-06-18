import React, { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
export const ToDoList = ({
  ToDoArray,
  setToDoArray,
  setEditStatus,
  setInputValue,
  setEditId,
  PendingStatus,
  CompletedStatus,
}) => {
  const changestatus = (id) => {
    setToDoArray(
      ToDoArray.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  const edit = (id) => {
    setEditStatus(true);
    setInputValue(ToDoArray.find((item) => item.id === id).task);
    setEditId(id);
  };

  const filteredToDoArray = ToDoArray.filter((item) => {
    if (PendingStatus && !CompletedStatus) {
      return item.completed === false;
    } else if (!PendingStatus && CompletedStatus) {
      return item.completed === true;
    } else {
      return true;
    }
  });

  return (
    <>
      <ul>
        {filteredToDoArray.map((item) => (
          <li key={item.id} className={item.completed ? "strike" : "normal"}>
            {item.task}
            <span onClick={() => changestatus(item.id)}>
              <IoMdDoneAll />
            </span>
            <span onClick={() => edit(item.id)}>
              <CiEdit />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
