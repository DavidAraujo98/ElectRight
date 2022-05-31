import React from 'react';
import ProposalList from '../components/ProposalList'
import { useState, useEffect } from 'react';
import '../css/Editor.css'

const Editor = () => {
    const [proposals, setProposal] = useState(null);
    const url = "http://localhost:5000/posts";

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProposal(data);
            });
    }, []);

    const centerBody = {
        marginTop: "10px",
        marginBottom: "10px",
        marginInline: "20%",
        writingMode: "horizontal-tb",
    }

    const addProposal = e => {
        var proposal = { id: Date.now(), title: "", old_: "", new_: "", proponents: [], images: [] };
        setProposal(proposals.concat(proposal));
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(proposal)
        });
    }

    const deleteProposal = (id) => {
        const newProposals = proposals.filter(proposal => proposal.id !== id);
        setProposal(newProposals);
    }

    const editProposal = (proposal, i) => {
        var newProposals = proposals;
        newProposals[i] = proposal;
        console.log(proposal);
        setProposal(newProposals);
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(proposal)
        });
    }

    return (  
        <div style={centerBody}>
            <div>
                {proposals && <ProposalList proposals={proposals} deleteProposal={deleteProposal} editProposal={editProposal} />}
            </div>
            <div class="editor">
                <div class="card btn area-green rounded p-3" onClick={addProposal} >
                    <span><i class="fa-solid fa-plus fa-2xl"></i></span>
                    <h5 class="p-0 m-0">Add proposal</h5>
                </div>
            </div>
            <div class="d-grid gap-2 d-md-block fixed-bottom position-static m-3">
                <a onClick={() => alert(proposals.length)} class="btn btn-elect rounded-pill px-4"><b>Create</b></a>
            </div>
        </div>
    );
}
 
export default Editor;