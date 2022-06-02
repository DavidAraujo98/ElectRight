import React from "react";
import ProposalList from "../components/ProposalList";
import VotersModal from "../components/VotersModal";
import { useState, useEffect } from "react";
import "../css/Editor.css";

const Editor = () => {
    const [election, setElection] = useState({
        id: new Date().getTime() + 1,
        title: null,
        startDate: null,
        endDate: null,
        proposals: [],
        voters: [],
    });
    const url = "https://localhost:5000/election/";

    useEffect(() => {
        if (new URLSearchParams(window.location.search).get("id") != null) {
            var id = new URLSearchParams(window.location.search).get("id");
            fetch(url + id)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setElection(data);
                    
                });
        }
        console.log(election);
    }, []);

    const centerBody = {
        marginTop: "10px",
        marginBottom: "10px",
        marginInline: "20%",
        writingMode: "horizontal-tb",
    };

    const electionTitle = (e) => {
        var temp = election;
        temp.title = e.target.value;
        setElection(temp);
        console.log(election)
    }

    const addProposal = (e) => {
        var proposal = {
            id: new Date().getTime(),
            title: "",
            old_: "",
            new_: "",
            proponents: [],
            images: [],
        };
        let temp = Object.assign({}, election);
        temp.proposals = temp.proposals.concat(proposal);
        setElection(temp);
    };

    const deleteProposal = (id) => {
        election.proposals = election.proposals.filter(
            (proposal) => proposal.id !== id
        );
        setElection(election);
    };

    const editProposal = (proposal, i) => {};

    const votersSelection = () => {};

    return (
        <div style={centerBody}>
            <div>
                <input
                    value={election.title}
                    onChange={(e) => electionTitle(e.target.value)}
                    type="text"
                    id="title"
                    placeholder="Proposal title"
                    className="form-control pink fs-2 p-0"
                    focused
                />
            </div>
            <div className="editor my-4">
                {election && election.proposals && (
                    <ProposalList
                        proposals={election.proposals}
                        deleteProposal={deleteProposal}
                        editProposal={editProposal}
                    />
                )}
                <div
                    className="card btn area-green rounded border-0"
                    onClick={addProposal}
                >
                    <span className="my-1">
                        <i className="fa-solid fa-plus fa-2xl"> </i>
                    </span>
                    <h5 className="m-0 mt-1"> Add proposal </h5>
                </div>
            </div>
            {/* File */}
            <div
                className="card btn area-pink rounded border-0"
                onClick={addProposal}
            >
                <span className="my-1">
                    <i className="fa-solid fa-upload fa-2xl"> </i>
                </span>
                <h5 className="m-0 mt-1"> Upload document </h5>
            </div>
            <div className="d-grid gap-2 d-md-block fixed-bottom position-static m-3">
                {election && election.proposals && (
                    <VotersModal
                        active={election.proposals}
                        votersSelection={votersSelection}
                    />
                )}
            </div>
        </div>
    );
};

export default Editor;
