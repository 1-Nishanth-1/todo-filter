import React from "react";
import { useState } from "react";
import { ToDoForm } from "./todoform";
import { ToDoList } from "./todolist";
export const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [ToDoArray, setToDoArray] = useState([]);
  const [CompletedStatus, setCompletedStatus] = useState(0);
  const [PendingStatus, setPendingStatus] = useState(0);
  const [EditStatus, setEditStatus] = useState(false);
  const [EditId, setEditId] = useState(0);
  return (
    <>
      <ToDoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        setToDoArray={setToDoArray}
        ToDoArray={ToDoArray}
        setCompletedStatus={setCompletedStatus}
        setPendingStatus={setPendingStatus}
        setEditStatus={setEditStatus}
        EditStatus={EditStatus}
        EditId={EditId}
      />
      <ToDoList
        ToDoArray={ToDoArray}
        setToDoArray={setToDoArray}
        setEditStatus={setEditStatus}
        setInputValue={setInputValue}
        setEditId={setEditId}
        PendingStatus={PendingStatus}
        CompletedStatus={CompletedStatus}
      />
    </>
  );
};
