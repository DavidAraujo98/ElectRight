import { useState } from "react";
import { isEqual } from "lodash";
import UserToast from "./UserToast";

const VotersModal = ({ friends, voters, addVoters }) => {
    const [voterList, setVoter] = useState(voters);
    const [fltr, setFilter] = useState(friends);

    const addUser = (id, active) => {
        var temp = voterList;
        temp = temp.filter((voter) => voter.id !== id);
        if (temp.length < voterList.length) {
            setVoter(temp);
        } else {
            setVoter(
                voterList.concat(friends.filter((voter) => voter.id === id))
            );
        }
    };

    const filterSearch = (search) => {
        setFilter(
            friends.filter(
                (voter) =>
                    voter.name.toLowerCase().substring(0, search.length) ===
                    search.toLowerCase()
            )
        );
    };

    const exists = (voter) => {
        voterList.forEach((existing) => {
            if (isEqual(voter, existing)) {
                return true;
            }
        })
        return false
    }

    return (
        <div>
            <button
                className="btn btn-elect shadow rounded-pill px-4 "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Create
            </button>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="false"
            >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">
                                Add friends
                            </h3>
                            <button
                                type="button"
                                className="btn-close pink"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2 border rounded-pill"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={(e) =>
                                        filterSearch(e.target.value)
                                    }
                                />
                            </form>
                        </div>
                        <div className="m-auto mb-2">
                            {fltr.map((voter) => (
                                <UserToast
                                    user={voter}
                                    addUser={addUser}
                                    active={exists(voter)}
                                />
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-right rounded-pill"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-elect rounded-pill"
                                onClick={() => addVoters(voterList)}
                            >
                                Create ballot
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VotersModal;
