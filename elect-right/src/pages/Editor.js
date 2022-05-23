import React from 'react';
import Proposal from '../components/ProposalForm'
import { useState } from 'react';

const Editor = () => {
    const [proposals, setProposal] = useState([
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
                {proposals.map((proposals) => (
                    <Proposal />
                ))}
            </div>
        </div>
    );
}
 
export default Editor;