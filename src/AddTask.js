import { useState, useContext } from "react";
import { TasksDispatchContext } from "./TasksContext.js";

export default function AddTask() {
  const tasksDispatch = useContext(TasksDispatchContext);
  const [text, setText] = useState("");

  const [nextId, setNextId] = useState(3);

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          tasksDispatch({
            type: "added",
            text,
            id: nextId,
          });
          setNextId(nextId + 1);
        }}
      >
        Add
      </button>
    </>
  );
}
