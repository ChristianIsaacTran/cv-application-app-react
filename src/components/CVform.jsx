import GeneralInfo from "./generalInfo.jsx";
import Education from "./education.jsx";
import Experience from "./experience.jsx";
import FinalCV from "./finalCV.jsx";
import {useState} from "react";
import "../styles/CVform.css";

function MainForm() {
    const [finalSubmit, setFinalSubmit] = useState(false);

    const mainSubmitHandler = (e) => {
        e.preventDefault();

        setFinalSubmit(true);
    }

    if(finalSubmit === true) {
        return(
            <main style={{background: "none"}}>
                <FinalCV />
            </main>
        );
    }

  return (
    <main>
      <h1 className="app-title">CV React App</h1>
      <div className="form-sections">
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
      <button className="main-submit" onClick={mainSubmitHandler}>
        Submit
      </button>
    </main>
  );
}

export default MainForm;
