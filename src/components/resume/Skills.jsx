import ExpandableList from "../UI/ExpandableList";

const Skills = () => {
    return(
    <div className="skills">
        <h3 className="leftColumnHeading">Skills</h3>
        <hr className='leftHr'></hr>
        <ExpandableList side={'left'} deleteClass={'deleteBtn'} listItemClass={'listItem'} buttonName={'Add Skill'} listItemName={'Skill'} buttonClass={'addSkill'}/>
    </div>
    )
}

export default Skills;