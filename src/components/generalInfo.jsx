import "../styles/generalInfo.css";

function GeneralInfo() {
  return (
    <fieldset className="general-info-container"> 
      <legend>General Infomation</legend>
      <div className="name-container">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
      </div>
      <div className="email-container">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" />
      </div>
      <div className="phone-container">
        <label htmlFor="phone-number">Phone Number:</label>
        <input type="text" id="phone-number" />
      </div>
      <div className="general-button-container">
        <button className="general-submit">Submit</button>
        <button className="general-edit">Edit</button>
      </div>
    </fieldset>
  );
}

export default GeneralInfo;
