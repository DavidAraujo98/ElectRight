import "../css/ProposalList.css";
import { useState } from "react";
import cloneDeep from "lodash/cloneDeep";

const ProposalVoting = ({ proposals, castVote, votes }) => {
    
    const handleChange = (id, e) => {
        var temp = cloneDeep(votes);
        temp = temp.filter((props) => 
            props.id != id
        )
        temp = temp.concat({ id: id, value: e.target.checked });
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
                                    <div className="m-auto mt-3 text-end">
                                        <input
                                            className="form-check-input align-middle"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                            onChange={(e) => handleChange(proposal.id, e)}
                                        />
                                        <label
                                            className="form-check-label fs-5 m-auto mx-1 align-middle"
                                            htmlFor="flexCheckDefault"
                                        >
                                            Approve
                                        </label>
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
