import { useState } from "react";
import "../styles/experience.css";

function Experience() {
  // experience fields info useState
  const [info, setInfo] = useState({
    companyName: "",
    position: "",
    mainResponse: "",
    startDate: "",
    endDate: "",
    editing: true,
  });

  //   input field data useState
  const [userInput, setUserInput] = useState({
    companyNameInput: "",
    positionInput: "",
    mainResponseInput: "",
    startDateInput: "",
    endDateInput: "",
  });

  //   checkbox data useState
  const [stillWorking, setStillWorking] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const tempInfo = {
      companyName: e.target.companyName.value,
      position: e.target.position.value,
      mainResponse: e.target.mainResponse.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      editing: false,
    };

    setInfo(tempInfo);
  };

  const editHandler = () => {
    const tempInfo = { ...info, editing: true };

    setInfo(tempInfo);
  };

  const inputChangeHandler = (e) => {
    if (e.target.id === "company-name") {
      setUserInput({ ...userInput, companyNameInput: e.target.value });
    } else if (e.target.id === "position-input") {
      setUserInput({ ...userInput, positionInput: e.target.value });
    } else if (e.target.id === "main-response") {
      setUserInput({ ...userInput, mainResponseInput: e.target.value });
    } else if (e.target.id === "start-date") {
      setUserInput({ ...userInput, startDateInput: e.target.value });
    } else if (e.target.id === "end-date") {
      setUserInput({ ...userInput, endDateInput: e.target.value });
    }
  };

  const checkboxHandler = (e) => {
    setStillWorking(e.target.checked);
  };

  const stillWorkingSubmitRender = () => {
    if (stillWorking === true) {
      return <p>Yes</p>;
    }

    return <p>No</p>;
  };

  if (info.editing === false) {
    return (
      <fieldset className="experience-container">
        <legend>Experience</legend>

        <div className="company-name-container">
          <label htmlFor="company-name">Company Name:</label>
          <p>{info.companyName}</p>
        </div>
        <div className="position-container">
          <label htmlFor="position-input">Position:</label>
          <p>{info.position}</p>
        </div>
        <div className="main-responsibilities-container">
          <label htmlFor="main-response">Main Responsibilities:</label>
          <p>{info.mainResponse}</p>
        </div>
        <div className="start-date-container experience">
          <label htmlFor="start-date">Start Date:</label>
          <p>{info.startDate}</p>
        </div>
        <div className="end-date-container experience">
          <label htmlFor="end-date">End Date:</label>
          <p>{info.endDate}</p>
        </div>
        <div className="still-working-container">
          <label htmlFor="still-working">Still Working?</label>
          {stillWorkingSubmitRender()}
        </div>
        <div className="experience-button-container">
          <button className="experience-edit" onClick={editHandler}>
            Edit
          </button>
        </div>
      </fieldset>
    );
  }

  return (
    <form action="" className="experience-form" onSubmit={submitHandler}>
      <fieldset className="experience-container">
        <legend>Experience</legend>

        <div className="company-name-container">
          <label htmlFor="company-name">Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={userInput.companyNameInput}
            id="company-name"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="position-container">
          <label htmlFor="position-input">Position:</label>
          <input
            type="text"
            name="position"
            value={userInput.positionInput}
            id="position-input"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="main-responsibilities-container">
          <label htmlFor="main-response">Main Responsibilities:</label>
          <textarea
            type="text"
            name="mainResponse"
            value={userInput.mainResponseInput}
            id="main-response"
            onChange={inputChangeHandler}
            rows="5"
            col="40"
          ></textarea>
        </div>
        <div className="start-date-container experience">
          <label htmlFor="start-date">Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={userInput.startDateInput}
            id="start-date"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="end-date-container experience">
          <label htmlFor="end-date">End Date:</label>
          <input
            type="date"
            name="endDate"
            value={userInput.endDateInput}
            id="end-date"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="still-working-container">
          <label htmlFor="still-working">Still Working?</label>
          <input
            type="checkbox"
            checked={stillWorking}
            onChange={checkboxHandler}
            id="still-working"
          />
        </div>
        <div className="experience-button-container">
          <button className="experience-submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default Experience;
