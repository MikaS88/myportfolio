
import resume from '../../downloads/MihaelaS.pdf'
const CV = () => {
    return (
        <a href={resume} className="cv" onClick={CV} target="_blank" rel="noreferrer">
         Download File
        </a>
    )
    };
 
     
export default CV;
