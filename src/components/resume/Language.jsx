//import { useState } from "react";
import ExpandableList from "../UI/ExpandableList";

const Language = () => {

    return(
        <div className="language">
            <h3 className="leftColumnHeading">Language</h3>
            <hr className='leftHr'></hr>
            <ExpandableList buttonName={'Add Language'} listItemName={'Language'} side={'left'}/>
        </div>
    )
}

export default Language; 