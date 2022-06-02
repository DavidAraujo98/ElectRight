const VotersModal = ({ votersSelection }) => {
    return (
        <div>
            <button
                onClick={() => votersSelection()}
                className="btn btn-elect rounded-pill px-4"
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
                                />
                                <button
                                    className="btn btn-elect rounded-pill"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
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
