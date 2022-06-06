import * as React from "react";
import cloneDeep from "lodash/cloneDeep";
import ProposalList from "../components/ProposalList";
import VotersModal from "../components/VotersModal";
import { useState, useEffect } from "react";
import "../css/Editor.css";

const Editor = () => {
    const [election, setElection] = useState({
        id: new Date().getTime() + 1,
        title: "",
        startDate: "",
        endDate: "",
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
    }, []);

    const centerBody = {
        marginTop: "10px",
        marginBottom: "10px",
        marginInline: "20%",
        writingMode: "horizontal-tb",
    };

    const electionTitle = (e) => {
        var temp = cloneDeep(election);
        temp.title = e.target.value;
        setElection(temp);
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
        var temp = cloneDeep(election);
        temp.proposals = temp.proposals.concat(proposal);
        setElection(temp);
    };

    const deleteProposal = (id) => {
        var temp = cloneDeep(election);
        temp.proposals = temp.proposals.filter(
            (proposal) => proposal.id !== id
        );
        setElection(temp);
    };

    const editProposal = (new_proposal, index) => {
        var temp = cloneDeep(election);
        temp.proposals[index] = new_proposal;
        setElection(temp);
    };

    const setStartTime = (e) => {
        var temp = cloneDeep(election);
        temp.startDate = e.target.value;
        setElection(temp);
    };

    const setEndTime = (e) => {
        var temp = cloneDeep(election);
        temp.endDate = e.target.value;
        setElection(temp);
    }

    const votersSelection = () => {};

    return (
        <div style={centerBody}>
            <div>
                <input
                    value={election.title}
                    onChange={electionTitle}
                    type="text"
                    id="title"
                    placeholder="Election title"
                    className="form-control pink fs-1 p-0 border border-0 border-bottom text-center shadow-none my-5"
                />
                <div className="row">
                    <div className="col m-1">
                        <label className="row-1" for="start">
                            Start time
                        </label>
                        <input
                            type="datetime-local"
                            id="start"
                            class="row-1 border border-pink rounded-pill px-2 m-2 green"
                            onBlur={setStartTime}
                        />
                    </div>
                    <div className="col m-1">
                        <label className="row-1" for="end">
                            End time
                        </label>
                        <input
                            type="datetime-local"
                            id="end"
                            class="row-1 border border-pink rounded-pill px-2 m-2 pink"
                            onBlur={setEndTime}
                        />
                    </div>
                </div>
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
                className="card btn area-pink rounded border-0 my-5"
                onClick={addProposal}
            >
                <span className="my-1">
                    <i className="fa-solid fa-upload fa-2xl"> </i>
                </span>
                <h5 className="m-0 mt-1"> Upload document </h5>
            </div>
            <div className="d-grid gap-2 d-md-block fixed-bottom position-static my-5">
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
