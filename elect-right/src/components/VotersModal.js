import { useState } from "react";
import { isEqual } from "lodash";
import UserToast from "./UserToast";
import "../css/ProposalList.css";

const VotersModal = ({ friends, voters, addVoters, editor }) => {
    const [voterList, setVoter] = useState(voters);
    const [editorin, setEditor] = useState(false);
    const [fltr, setFilter] = useState(friends);

    const addUser = (id) => {
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
        });
        return false;
    };

    const addMyself = () => {
        if (editorin) {
            setVoter(voterList.filter((voter) => voter.id !== editor.id));
        } else {
            setVoter(voterList.concat(editor));
        }
        setEditor(!editorin);
    };

    return (
        <div>
            <button
                className="btn btn-elect shadow rounded-pill px-4"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Add Users
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
                            <div className="d-flex justify-content-center align-items-center">
                                <input
                                    type="checkbox"
                                    className="btn-check"
                                    name="options"
                                    id="addmyself"
                                    autocomplete="off"
                                    onClick={() => addMyself()}
                                />
                                <label
                                    className="btn btn-right rounded-pill px-3"
                                    htmlFor="addmyself"
                                >
                                    Add Myself
                                </label>
                            </div>
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
