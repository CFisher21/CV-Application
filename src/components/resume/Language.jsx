//import { useState } from "react";
import ExpandableList from "../UI/ExpandableList";

const Language = () => {
    const myLang = ['English (Fluent)']
    return(
        <div className="language">
            <h3 className="leftColumnHeading">Language</h3>
            <hr className='leftHr'></hr>
            <ExpandableList initialValue={myLang} deleteClass={'deleteBtn'} listItemClass={'listItem'}buttonClass={'addLang'} buttonName={'Add Language'} listItemName={'Language'} side={'left'}/>
        </div>
    )
}

export default Language; 