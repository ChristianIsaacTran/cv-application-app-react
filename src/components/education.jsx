import "../styles/education.css";

function Education() {
  return (
    <fieldset className="education-container">
      <legend>Education</legend>

      <div className="school-name-container">
        <label htmlFor="">School Name:</label>
        <input type="text" />
      </div>

      <div className="major-container">
        <label htmlFor="">Major: </label>
        <input type="text" />
      </div>

      <div className="start-date-container education">
        <label htmlFor="">Start Date:</label>
        <input type="date" />
      </div>

      <div className="end-date-container education">
        <label htmlFor="">End Date:</label>
        <input type="date" />
      </div>

      <div className="still-attending-container">
        <label htmlFor="">Still attending?</label>
        <input type="checkbox" />
      </div>

      <div className="education-button-container">
        <button className="education-submit">Submit</button>
        <button className="education-edit">Edit</button>
      </div>
    </fieldset>
  );
}

export default Education;
