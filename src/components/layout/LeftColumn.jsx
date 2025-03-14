import Contact from "../resume/contact";
import Education from "../resume/Education"
const LeftColumn = () => {
    return (
    <div className="LeftColumn">
        <img src="/src/assets/profile.jpg" className="profilePicture"/>
        <Contact/>
        <Education/>
    </div>
    )
}

export default LeftColumn;