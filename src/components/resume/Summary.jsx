import EditableField from "../UI/EditableField";
import { useState } from 'react'


const Summary = () => {

    const [text, setText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti architecto dignissimos quis nisi atque voluptatum? Consectetur nisi quasi repellat accusamus perferendis quaerat. Ducimus necessitatibus reiciendis aliquid sed sit pariatur?')

    return(
        <div className="summary">
            <h1 className="summaryTitle">Profile</h1>
            <hr></hr>
            <EditableField initialValue={text} className={'summaryText'} onSave={setText} type={'text'} side={'right-side'}/>
        </div>
    )
}



export default Summary;