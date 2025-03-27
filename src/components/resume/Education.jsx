import EditableField from "../UI/EditableField";
import React, {useState} from 'react';

const Education = () => {

    const className = 'educationGroupSpan'
    const [school, setSchool] = useState('Keyin College')
    const [eduYear, setEduYear] = useState('2021 - 2024')
    const [degree, setDegree] = useState('Software Development')
    const degreeClass = 'degree'

    return(
    <div className="education">
        <h3 className="leftColumnHeading">Education</h3>
        <div className="eduColumnGroup">
            <EditableField initialValue={eduYear} onSave={setEduYear} className={className} type={'text'} side={'left'}/>
            <EditableField initialValue={school} onSave={setSchool} className={className} type={'text'} side={'left'}/>
            <EditableField initialValue={degree} onSave={setDegree} className={degreeClass} type={'text'} side={'left'}/>
        </div>
    </div>
    )
}

export default Education;