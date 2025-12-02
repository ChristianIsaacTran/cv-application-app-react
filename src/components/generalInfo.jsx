import "../styles/generalInfo.css";
import { useState } from "react";

function GeneralInfo() {
  const [info, setInfo] = useState({name: "", email:"", phone:"", editing: true});
  const [userInput, setUserInput] = useState({nameInput:"", emailInput:"", phoneInput:""});

  // when submitting, record all inputs into info and set (editing) flag to false 
  const submitHandler = (e) => {
    e.preventDefault();

    const tempInfo = {
      name: e.target.infoName.value,
      email: e.target.infoEmail.value,
      phone: e.target.infoPhone.value,
      editing: false,
    };

    setInfo(tempInfo);
  };

  // when initiating editing mode, set the editing flag to true and trigger re-render
  const editHandler = (e) => {
    e.preventDefault();
    setInfo({...info, editing: true});
  };

  // onChange handler for input fields 
  const inputChangeHandler = (e) => {
    if(e.target.id === "name") {
      setUserInput({...userInput, nameInput: e.target.value});
    } else if(e.target.id === "email") {
      setUserInput({...userInput, emailInput: e.target.value});
    } else if(e.target.id === "phone-number") {
      setUserInput({...userInput, phoneInput: e.target.value});
    }
  }

  // render if NOT editing, and submitted 
  if (info.editing === false) {
    return (
      <fieldset className="general-info-container">
        <legend>General Infomation</legend>
        <div className="name-container">
          <label htmlFor="name">Name:</label>
          <p>{info.name}</p>
        </div>
        <div className="email-container">
          <label htmlFor="email">Email:</label>
          <p>{info.email}</p>
        </div>
        <div className="phone-container">
          <label htmlFor="phone-number">Phone Number:</label>
          <p>{info.phone}</p>
        </div>
        <div className="general-button-container">
          <button className="general-edit" onClick={editHandler}>
            Edit
          </button>
        </div>
      </fieldset>
    );
  }

  // main render (editing mode)
  return (
    <form action="" className="general-info-form" onSubmit={submitHandler}>
      <fieldset className="general-info-container">
        <legend>General Infomation</legend>
        <div className="name-container">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="infoName" value={userInput.nameInput} onChange={inputChangeHandler}/>
        </div>
        <div className="email-container">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="infoEmail" value={userInput.emailInput} onChange={inputChangeHandler} />
        </div>
        <div className="phone-container">
          <label htmlFor="phone-number">Phone Number:</label>
          <input type="text" id="phone-number" name="infoPhone" value={userInput.phoneInput}  onChange={inputChangeHandler}/>
        </div>
        <div className="general-button-container">
          <button className="general-submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default GeneralInfo;
