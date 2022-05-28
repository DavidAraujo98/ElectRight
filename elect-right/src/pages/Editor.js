import React from 'react';
import ProposalForm from '../components/ProposalForm'
import { useState } from 'react';
import '../css/Editor.css'

const Editor = () => {
    const [proposals, setProposal] = useState([]);

    const centerBody = {
        marginTop: "10px",
        marginBottom: "10px",
        marginInline: "20%",
        writingMode: "horizontal-tb",
    }

    const addProposal = e => {
        setProposal(proposals.concat(<ProposalForm key={proposals.length} id={proposals.length} />));
    }

    return (  
        <div style={centerBody}>
            <div>
                {proposals}
            </div>
            <div class="editor">
                <div class="card btn area-green rounded p-3" onClick={addProposal} >
                    <span><i class="fa-solid fa-plus fa-2xl"></i></span>
                    <h5 class="p-0 m-0">Add proposal</h5>
                </div>
            </div>
        </div>
    );
}
 
export default Editor;