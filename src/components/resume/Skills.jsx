import ExpandableList from "../UI/ExpandableList";

const Skills = () => {
    return(
    <div className="skills">
        <h3 className="leftColumnHeading">Skills</h3>
        <ExpandableList buttonName={'Add Skill'} listItemName={'Skill'}/>
    </div>
    )
}

export default Skills;