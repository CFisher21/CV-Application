import ExpandableList from "../UI/ExpandableList";

const Skills = () => {
    const mySkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git', 'GitHub', 'PostgreSQL', 'MySQL', 'AWS', 'MongoDB']
    return(
    <div className="skills">
        <h3 className="leftColumnHeading">Skills</h3>
        <hr className='leftHr'></hr>
        <ExpandableList initialValue={mySkills} side={'left'} deleteClass={'deleteBtn'} listItemClass={'listItem'} buttonName={'Add Skill'} listItemName={'Skill'} buttonClass={'addSkill'}/>
    </div>
    )
}

export default Skills;