import "../styles/experience.css";

function Experience() {
  return (
    <fieldset className="experience-container">
      <legend>Experience</legend>

      <div className="company-name-container">
        <label htmlFor="">Company Name:</label>
        <input type="text" />
      </div>
      <div className="position-container">
        <label htmlFor="">Position:</label>
        <input type="text" />
      </div>
      <div className="main-responsibilities-container">
        <label htmlFor="">Main Responsibilities:</label>
        <input type="text" />
      </div>
      <div className="start-date-container experience">
        <label htmlFor="">Start Date:</label>
        <input type="date" />
      </div>
      <div className="end-date-container experience">
        <label htmlFor="">End Date:</label>
        <input type="date" />
      </div>
      <div className="still-working-container"> 
        <label htmlFor="">Still Working?</label>
        <input type="checkbox" />
      </div>
      <div className="experience-button-container">
        <button>Submit</button>
        <button>Edit</button>
      </div>
    </fieldset>
  );
}

export default Experience;
