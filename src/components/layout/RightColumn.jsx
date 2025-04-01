import Certification from '../resume/Certification';
import Name from '../resume/Name'
import Summary from '../resume/Summary';
import Work from '../resume/Work';

const RightColumn = () => {
    return (
        <div className="RightColumn">
            <Name/>
            <Summary/>
            <Work/>
            <Certification/>
        </div>
    )
    
}

export default RightColumn;