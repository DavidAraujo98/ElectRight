import React from 'react';
import { useState } from 'react';

const Editor = () => {
    const [proposals, setProposal] = useState([
        {id:"sessionid+proposalid", title:"Titles", original: "original", altered: "altered", proponentList: "proponent", referenceDoc: "referenceDoc", imageList: "images" },
    ]);

    return (  
        <div>
            {proposals.map((proposals) => (
                <Proposals
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
    );
}
 
export default Editor;