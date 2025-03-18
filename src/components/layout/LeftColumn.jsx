import Contact from "../resume/contact";
import Education from "../resume/Education"
import Skills from "../resume/Skills"
const LeftColumn = () => {
    return (
    <div className="LeftColumn">
        <img src="/src/assets/profile.jpg" className="profilePicture"/>
        <Contact/>
        <Education/>
        <Skills/>
    </div>
    )
}

export default LeftColumn;