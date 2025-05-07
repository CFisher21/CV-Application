import { useState } from 'react';
import ExpandableList from '../UI/ExpandableList'

const Certification = () => {
    const certifications = ['AWS Academy Cloud Architecting (2022)', 'AWS Academy Cloud Developing (2022)']
    return(
        <div className="certification">
            <h1 className="certTitle">Certification</h1>
            <hr></hr>
            <ExpandableList initialValue={certifications}  side={'right'} deleteClass={'deleteBtn2'} listItemClass={'certList'} buttonName={'Add Certification'} listItemName={'Certification'} buttonClass={'addCert'}/>
        </div>
    )
}

export default Certification;