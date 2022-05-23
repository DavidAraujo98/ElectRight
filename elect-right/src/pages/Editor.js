import React from 'react';
import Proposal from '../components/Proposal'
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
                    <Proposal
                        id={proposals.id}
                        title={proposals.title}
                        original={proposals.original}
                        altered={proposals.altered}
                        proponentList={proposals.proponentList}
                        referenceDoc={proposals.referenceDoc}
                        imageList={proposals.imageList}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default Editor;