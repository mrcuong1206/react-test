import React from "react";

// 1.
const initState = {
  job: "",
  jobs: [],
};
//2.
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DEL_JOB = "del_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const delJob = (payload) => {
  return {
    type: DEL_JOB,
    payload,
  };
};
//3.
const reducer = (state, action) => {
  console.log("Action: ", action);
  console.log("Prev State: ", state);
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DEL_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;

    default:
      throw new Error("Invalid.");
  }
  console.log("New State: ", newState);
  return newState;
};

const NewReducer = () => {
  // 4.
  const [state, dispatch] = React.useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = React.useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div>
      <h3>Todo</h3>
      <input
        placeholder="Enter todo..."
        ref={inputRef}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job} <span onClick={() => dispatch(delJob(index))}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewReducer;
