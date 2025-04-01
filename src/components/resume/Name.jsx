import { useState } from 'react';
import EditableField from '../UI/EditableField'

const Name = () => {
    const [firstName, setFirstName] = useState('CODY');
    const [lastName, setLastName] = useState('FISHER');
    const [jobTitle, setJobTitle] = useState('Software Developer');

    return( 
        <div className="name">
            <div className="fullName">
                <EditableField initialValue={firstName} onSave={setFirstName} className={'firstName'} side={'right-name'} type={'text'} />
                <EditableField initialValue={lastName} onSave={setLastName} className={'lastName'} side={'right-name'} type={'text'}/>
            </div>
            <EditableField initialValue={jobTitle} onSave={setJobTitle} className={'jobTitleHeader'} side={'right-jobTitle'} type={'text'}/>
        </div>
    )
}

export default Name;