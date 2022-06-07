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
    const [election_url, setElectionUrl] = useState(
        "http://localhost:5000/election/"
    );
    var profile_url = "http://localhost:5000/profile/";

    useEffect(() => {
        var idb = new URLSearchParams(window.location.search).get("idb");
        fetch(profile_url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setPersonalId(data.id);
                return data.id
            })
            .then((id) => {
                fetch(election_url + idb)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        var temp = data.voters.filter(
                            (item) => item.id == id
                        );
                        if (temp.length != 1) {
                            window.location.replace("/");
                        }
                        temp = votes
                        data.proposals.forEach((proposal) => {
                            temp = temp.concat({ id: proposal.id, value: false });
                        })
                        castVote(temp);
                        setElection(data);
                        setElectionUrl(election_url + data.id);
                    });
            })
        
    }, []);

    const submitBallot = () => {
        var temp = cloneDeep(election)
        var me = temp.voters.filter((voter) => voter.id == personalId)
        me[0].votes = votes
        temp.voters = temp.voters.filter((voter) => voter.id != personalId).concat(me[0]);
        setElection(temp);
        fetch(election_url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(temp),
        }).then((data) => {
            console.log("Ballot added");
        });
    }

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