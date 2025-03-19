import Contact from "../resume/contact";
import Education from "../resume/Education"
import Language from "../resume/Language";
import Profile from "../resume/Profile";
import Skills from "../resume/Skills"
const LeftColumn = () => {
    return (
    <div className="LeftColumn">
        <Profile/>
        <Contact/>
        <Education/>
        <Skills/>
        <Language/>
    </div>
    )
}

export default LeftColumn;