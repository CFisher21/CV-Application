import { useState } from 'react';
import EditableField from '../UI/EditableField'

const Name = () => {
    const [name, setName] = useState('CODY')

    return( 
        <div className="name">
            <div className="fullName">
                <EditableField initialValue={name} onSave={setName} className={'firstName'} />
                <h1 className="lastName">Fisher</h1>
            </div>
            <h2 className="jobTitle">Software Developer</h2>
        </div>
    )
}

export default Name;