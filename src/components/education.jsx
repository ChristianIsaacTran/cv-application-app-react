import { useState } from "react";

import "../styles/education.css";

function Education() {
  // education fields info
  const [info, setInfo] = useState({
    schoolName: "",
    major: "",
    startDate: "",
    endDate: "",
    editing: true,
  });

  //   input field data
  const [userInput, setUserInput] = useState({
    schoolNameInput: "",
    majorInput: "",
    startDateInput: "",
    endDateInput: "",
  });

  //   checkbox data
  const [stillAttending, setStillAttending] = useState(false);

  //   upon form submission, re-render the component in submission mode by toggling the info.editing boolean
  const submitHandler = (e) => {
    e.preventDefault();

    const tempInfo = {
      schoolName: e.target.schoolName.value,
      major: e.target.major.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      editing: false,
    };

    setInfo(tempInfo);
  };

  //   when going back to edit mode, toggle info.editing to true and trigger re-render
  const editHandler = () => {
    const tempInfo = { ...info, editing: true };

    setInfo(tempInfo);
  };

  //   handle controlled components and their changes within the input fields with the onChange attribute
  const inputChangeHandler = (e) => {
    if (e.target.id === "school-name") {
      setUserInput({ ...userInput, schoolNameInput: e.target.value });
    } else if (e.target.id === "school-major") {
      setUserInput({ ...userInput, majorInput: e.target.value });
    } else if (e.target.id === "start-date") {
      setUserInput({ ...userInput, startDateInput: e.target.value });
    } else if (e.target.id === "end-date") {
      setUserInput({ ...userInput, endDateInput: e.target.value });
    }
  };

  //   handler will set the checkbox boolean depending on the checkbox's state onChange
  const checkboxHandler = (e) => {
    setStillAttending(e.target.checked);
  };

  //  based on the boolean state of the checkbox, it will render yes or no as cosmetic JSX
  const stillAttendingSubmitRender = () => {
    if (stillAttending === true) {
      return <p>Yes</p>;
    }

    return <p>No</p>;
  };

  //   if not editing then display submission render
  if (info.editing === false) {
    return (
      <fieldset className="education-container">
        <legend>Education</legend>

        <div className="school-name-container">
          <label htmlFor="">School Name:</label>
          <p>{info.schoolName}</p>
        </div>

        <div className="major-container">
          <label htmlFor="">Major: </label>
          <p>{info.major}</p>
        </div>

        <div className="start-date-container education">
          <label htmlFor="">Start Date:</label>
          <p>{info.startDate}</p>
        </div>

        <div className="end-date-container education">
          <label htmlFor="">End Date:</label>
          <p>{info.endDate}</p>
        </div>

        <div className="still-attending-container">
          <label htmlFor="">Still attending?</label>
          {stillAttendingSubmitRender()}
        </div>

        <div className="education-button-container">
          <button className="education-edit" onClick={editHandler}>
            Edit
          </button>
        </div>
      </fieldset>
    );
  }

//   main editing render
  return (
    <form action="" className="education-form" onSubmit={submitHandler}>
      <fieldset className="education-container">
        <legend>Education</legend>

        <div className="school-name-container">
          <label htmlFor="">School Name:</label>
          <input
            type="text"
            name="schoolName"
            id="school-name"
            value={userInput.schoolNameInput}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="major-container">
          <label htmlFor="">Major: </label>
          <input
            type="text"
            name="major"
            id="school-major"
            value={userInput.majorInput}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="start-date-container education">
          <label htmlFor="">Start Date:</label>
          <input
            type="date"
            name="startDate"
            id="start-date"
            value={userInput.startDateInput}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="end-date-container education">
          <label htmlFor="">End Date:</label>
          <input
            type="date"
            name="endDate"
            value={userInput.endDateInput}
            id="end-date"
            onChange={inputChangeHandler}
          />
        </div>

        <div className="still-attending-container">
          <label htmlFor="">Still attending?</label>

          <input
            type="checkbox"
            name="attending"
            id="still-attending"
            onChange={checkboxHandler}
            checked={stillAttending}
          />
        </div>

        <div className="education-button-container">
          <button className="education-submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default Education;
