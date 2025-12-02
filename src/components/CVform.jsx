import GeneralInfo from "./generalInfo.jsx";
import Education from "./education.jsx";
import Experience from "./experience.jsx";
import "../styles/CVform.css";

function MainForm() {

  return (
    <main>
      <h1>CV React App</h1>
      <div className="form-sections">
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
      <button className="main-submit" onClick={(e) => e.preventDefault()}>
        Submit
      </button>
    </main>
  );
}

export default MainForm;
