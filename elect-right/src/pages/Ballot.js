import React from 'react';
import ProposalVoting from '../components/ProposalVoting'
import { useState, useEffect } from "react";
import { cloneDeep } from 'lodash';

const Ballot = () => {
    const [personalId, setPersonalId] = useState(null);
    const [election, setElection] = useState({
        id: new Date().getTime() + 1,
        title: "",
        startDate: "",
        endDate: "",
        proposals: [],
        voters: [],
    });
    const [votes, castVote] = useState([]);
    const [idb, setExtension] = useState("");
    var election_url = "http://localhost:5000/election/";

    useEffect(() => {
        var idb = new URLSearchParams(window.location.search).get("idb");
        setExtension(idb);
        fetch(election_url + idb)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                var temp = data.voters.filter(
                    (item) => parseInt(item.id) == parseInt(localStorage.getItem('ProfileId'))
                );
                if (temp.length != 1) {
                    window.location.replace("/");
                }
                temp = votes
                data.proposals.forEach((proposal) => {
                    temp = temp.concat({id: proposal.id, value: 0});
                })
                castVote(temp);
                setElection(data);
                setPersonalId(localStorage.getItem('ProfileId'))
            });
    }, []);

    const submitBallot = () => {
        var temp = cloneDeep(election)
        var me = temp.voters.filter((voter) => voter.id == personalId)
        me[0].votes = votes
        temp.voters = temp.voters.filter((voter) => voter.id != personalId).concat(me[0]);
        setElection(temp);
        fetch(election_url + idb, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(temp),
        }).then((data) => {
            window.location.replace("/results?idb=" + idb);
        });
    }

    useEffect(() => {
        setElection(election);
    }, []);

    const centerBody = {
        marginTop: "10px",
        marginInline: "25vw",
        writingMode: "horizontal-tb",
    }

    return (
        <div style={centerBody}>
            <div>
                <h1>{election.title}</h1>
            </div>
            {election && election.proposals && votes && (
                <ProposalVoting
                    proposals={election.proposals}
                    castVote={castVote}
                    votes={votes}
                />
            )}
            <div className="d-grid gap-2 d-md-block fixed-bottom position-static my-5">
                {election && (
                    <button
                        className="btn btn-elect shadow rounded-pill px-4 "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={submitBallot}
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
}

export default Ballot;