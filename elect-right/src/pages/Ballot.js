import React from 'react';
import Display from '../components/DisplayForm'
import { useState } from 'react';

const Ballot = () => {
    const [displays, setDisplay] = useState([
        {id:"sessionid+proposalid", title:"Titles", original: "original", altered: "altered", proponentList: "proponent", referenceDoc: "referenceDoc", imageList: "images" },
    ]);

    const centerBody = {
        marginTop: "10px",
        marginInline: "25vw",
        writingMode: "horizontal-tb",
    }

    return (  
        <div style={centerBody}>
            <div>
                {displays.map((displays) => (
                    <Display />
                ))}
            </div>
        </div>
    );
}
 
export default Ballot;