import ExpandableList from '../UI/ExpandableList'

const Certification = () => {

    return(
        <div className="certification">
            <h1 className="certTitle">Certification</h1>
            <hr></hr>
            <ExpandableList side={'right'} deleteClass={'deleteBtn2'} listItemClass={'certList'} buttonName={'Add Certification'} listItemName={'Certification'} buttonClass={'addCert'}/>
        </div>
    )
}

export default Certification;