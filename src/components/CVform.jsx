import GeneralInfo from "./generalInfo.jsx"
import Education from "./education.jsx"
import "../styles/CVform.css"


function MainForm() {
  return  (

    <form className="main-form" action="">
        <GeneralInfo />
        <Education />
        <button className="main-submit" onClick={(e)=>e.preventDefault()}>Submit</button>
    </form>
  );
}

export default MainForm;
