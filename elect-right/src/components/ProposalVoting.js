import "../css/ProposalList.css";
import cloneDeep from "lodash/cloneDeep";

const ProposalVoting = ({ proposals, castVote, votes }) => {
    const handleChange = (id, val) => {
        var temp = cloneDeep(votes);
        temp = temp.filter((props) => props.id !== id);
        temp = temp.concat({ id: id, value: parseInt(val) });
        castVote(temp);
    };

    return (
        <div>
            {proposals.map((proposal) => (
                <form id={proposal.id} className="my-3">
                    <div className="col align-items-center">
                        {/* Main Form */}
                        <div className="row-8 text-start my-5">
                            <div className="row align-items-center mx-auto">
                                <div className="col-11 ps-0 me-auto m-1">
                                    <span
                                        id="title"
                                        className="input form-control border border-0 shadow-none pink fs-2 p-0"
                                        role="textbox"
                                    >
                                        {proposal.title}
                                    </span>
                                </div>
                            </div>
                            <div className="card border-0 p-2 shadow-lg">
                                <div className="card-body py-1">
                                    <label htmlFor="old" className="form-label">
                                        Original version
                                    </label>
                                    <span
                                        id="old"
                                        className="input form-control border border-1"
                                    >
                                        {proposal.old_}
                                    </span>
                                    <div className="text-center m-2">
                                        <i className="fa-solid fa-arrow-down fa-2x"></i>
                                    </div>
                                    <label htmlFor="new" className="form-label">
                                        New version
                                    </label>
                                    <span
                                        id="new"
                                        className="input form-control border border-1"
                                    >
                                        {proposal.new_}
                                    </span>
                                    <div
                                        className="btn-group d-flex flex-md-row flex-column justify-content-center m-auto mt-3"
                                        onChange={(e) =>
                                            handleChange(
                                                proposal.id,
                                                e.target.value
                                            )
                                        }
                                    >
                                        <div className="m-2 d-flex justify-content-center align-items-center">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="options"
                                                id={proposal.id + "option1"}
                                                autocomplete="off"
                                                value="1"
                                            />
                                            <label
                                                className="btn btn-right rounded-pill px-4"
                                                htmlFor={proposal.id + "option1"}
                                            >
                                                Approve
                                            </label>
                                        </div>
                                        <div className="m-2 d-flex justify-content-center align-items-center">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="options"
                                                id={proposal.id + "option2"}
                                                autocomplete="off"
                                                value="-1"
                                            />
                                            <label
                                                className="btn btn-right rounded-pill px-4"
                                                htmlFor={
                                                    proposal.id + "option2"
                                                }
                                            >
                                                Decline
                                            </label>
                                        </div>
                                        <div className="m-2 d-flex justify-content-center align-items-center">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="options"
                                                id={proposal.id + "option3"}
                                                autocomplete="off"
                                                value="0"
                                            />
                                            <label
                                                className="btn btn-right rounded-pill px-4"
                                                htmlFor={proposal.id + "option3"}
                                            >
                                                Abstain
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            ))}
        </div>
    );
};

export default ProposalVoting;
