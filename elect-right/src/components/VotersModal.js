import { useState } from "react";

const VotersModal = ({ voters, addVoters }) => {

    const [voterList, setVoters] = useState([])
    const [fltr, setFilter] = useState(voters);

    const addUser = (id) => {
        var temp = voterList;
        temp = temp.filter((voter) => voter.id !== id);
        if (temp.length < voterList.length) {
            setVoters(temp);
        } else {
            setVoters(
                voterList.concat(voters.filter((voter) => voter.id === id))
            );
        }
    };

    const filterSearch = (search) => {
        setFilter(
            voters.filter(
                (voter) =>
                    voter.name.toLowerCase().substring(0, search.length) ===
                    search.toLowerCase()
            )
        );
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
                                Add Voters
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
                                <a
                                    id={voter.id}
                                    className="btn btn-elect rounded-pill m-1 py-auto px-3 text-decoration-none"
                                    data-bs-toggle="button"
                                    onClick={() => addUser(voter.id)}
                                >
                                    {/*<img src={user.pic}/> */}
                                    <p className="fs-5 m-auto">{voter.name}</p>
                                </a>
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
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VotersModal;
