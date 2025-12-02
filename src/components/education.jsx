import { useState } from "react";

import "../styles/education.css";

function Education() {
  const [info, setInfo] = useState({
    schoolName: "",
    major: "",
    startDate: "",
    endDate: "",
    stillAttending: false,
    editing: true,
  });

  const [userInput, setUserInput] = useState({schoolNameInput:"", majorInput:"", startDateInput:"", endDateInput: "", stillAttendingInput: false});

  const submitHandler = (e) => {
    e.preventDefault();

    const tempInfo = {
      schoolName: e.target.schoolName,
      major: e.target.major,
      startDate: e.target.startDate,
      endDate: e.target.endDate,
      stillAttending: e.target.attending,
      editing: true,
    };

    setInfo(tempInfo);
  };

  const inputChangeHandler = (e) => {
    if(e.target.id === "school-name") {
        setUserInput({...userInput, schoolNameInput: e.target.value});
    } else if(e.target.id === "school-major") {
        setUserInput({...userInput, majorInput: e.target.value});
    } else if(e.target.id === "start-date") {
        setUserInput({...userInput, startDateInput: e.target.value});
    } else if(e.target.id === "end-date") {
        setUserInput({...userInput, endDateInput: e.target.value});
    } else if(e.target.id === "still-attending") {
        setUserInput({...userInput, stillAttendingInput: e.target.value});
    }
  }

  return (
    <form action="" className="education-form" onSubmit={submitHandler}>
      <fieldset className="education-container">
        <legend>Education</legend>

        <div className="school-name-container">
          <label htmlFor="">School Name:</label>
          <input type="text" name="schoolName" id="school-name" value={userInput.schoolNameInput} onChange={inputChangeHandler}/>
        </div>

        <div className="major-container">
          <label htmlFor="">Major: </label>
          <input type="text" name="major" id="school-major" value={userInput.majorInput} onChange={inputChangeHandler} />
        </div>

        <div className="start-date-container education">
          <label htmlFor="">Start Date:</label>
          <input type="date" name="startDate" id="start-date" value={userInput.startDateInput} onChange={inputChangeHandler}/>
        </div>

        <div className="end-date-container education">
          <label htmlFor="">End Date:</label>
          <input type="date" name="endDate" value={userInput.endDateInput} id="end-date" onChange={inputChangeHandler}/>
        </div>

        <div className="still-attending-container">
          <label htmlFor="">Still attending?</label>
          <input type="checkbox" name="attending" value={userInput.stillAttendingInput} id="still-attending" onChange={inputChangeHandler} />
        </div>

        <div className="education-button-container">
          <button className="education-submit">Submit</button>
          <button className="education-edit">Edit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default Education;
