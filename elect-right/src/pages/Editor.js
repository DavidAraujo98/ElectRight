import React from "react";
import ProposalList from "../components/ProposalList";
import VotersModal from "../components/VotersModal";
import { useState, useEffect } from "react";
import "../css/Editor.css";

const Editor = () => {
    const [election, setElection] = useState(null);
    const url = "http://localhost:5000/election/";

    useEffect(() => {
        if (new URLSearchParams(window.location.search).get("id") != null) {
            var id = new URLSearchParams(window.location.search).get("id");
            fetch(url + id)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setElection(data);
                    console.log(election);
                });
        }
    }, []);

    const centerBody = {
        marginTop: "10px",
        marginBottom: "10px",
        marginInline: "20%",
        writingMode: "horizontal-tb",
    };

    const addProposal = (e) => {
        var proposal = {
            id: new Date().getTime(),
            title: "",
            old_: "",
            new_: "",
            proponents: [],
            images: [],
        };
        console.log(election.proposals)
        setElection(election.proposals.concat(proposal));
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
            <div class="editor my-4">
                {" "}
                {election && election.proposals && (
                    <ProposalList
                        proposals={election.proposals}
                        deleteProposal={deleteProposal}
                        editProposal={editProposal}
                    />
                )}{" "}
                <div
                    class="card btn area-green rounded border-0"
                    onClick={addProposal}
                >
                    <span class="my-1">
                        {" "}
                        <i class="fa-solid fa-plus fa-2xl"> </i>
                    </span>
                    <h5 class="m-0 mt-1"> Add proposal </h5>{" "}
                </div>{" "}
            </div>{" "}
            {/* File */}{" "}
            <div
                class="card btn area-pink rounded border-0"
                onClick={addProposal}
            >
                <span class="my-1">
                    {" "}
                    <i class="fa-solid fa-upload fa-2xl"> </i>
                </span>
                <h5 class="m-0 mt-1"> Upload document </h5>{" "}
            </div>{" "}
            <div class="d-grid gap-2 d-md-block fixed-bottom position-static m-3">
                {" "}
                {election && election.proposals && (
                    <VotersModal
                        active={election.proposals}
                        votersSelection={votersSelection}
                    />
                )}{" "}
            </div>{" "}
        </div>
    );
};

export default Editor;
