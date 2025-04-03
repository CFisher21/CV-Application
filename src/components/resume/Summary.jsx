import EditableField from "../UI/EditableField";
import { useState } from 'react'


const Summary = () => {

    const [text, setText] = useState('Enthusiastic Full Stack Developer with a 2-year diploma in Software Development from Keyin College. After nearly two years as an EWP Floor Designer, ready to contribute to innovative software solutions in a full-time development role. Adept at building dynamic, responsive web applications, I have developed hands-on projects such as a candidate search engine—and a to-do app. Eager to transition into a dedicated software development role, I bring a strong foundation in both front-end and back-end technologies, creative problem-solving skills, and a keen eye for detail.')

    return(
        <div className="summary">
            <h1 className="summaryTitle">Profile</h1>
            <hr></hr>
            <EditableField initialValue={text} className={'summaryText'} onSave={setText} type={'text'} side={'right-side'}/>
        </div>
    )
}



export default Summary;