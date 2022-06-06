import '../css/ProposalList.css';

const ProposalsList = ({proposals, deleteProposal, editProposal}) => {

    /*
    const addImages = e => {
        e.target.files.forEach(file => {
            var idf = URL.createObjectURL(file).name;
            var srcf = URL.createObjectURL(file);
            addImages(images.concat(<Image id={idf} src={srcf} />));
        });
    }
    */

    const handleChange = (field, value, id) => {
        var proposal = proposals.filter(proposal => proposal.id == id);
        var i = proposals.indexOf(proposal);
        proposal[0][field] = value;
        console.log(proposal[0])
        editProposal(proposal[0], i)
    }


    return (
        <div>
            {proposals.map((proposal) => (
                <form id={proposal.id} className="my-3">
                    <div className="col align-items-center">
                        {/* Main Form */}
                        <div className="row-8 text-start my-5">
                            <div className="row align-items-center mx-auto">
                                <div className="col-11 ps-0 me-auto m-1">
                                    <label
                                        htmlFor="title"
                                        className="form-label"
                                    >
                                        Title
                                    </label>
                                    <span
                                        onBlur={(e) =>
                                            handleChange(
                                                "title",
                                                e.target.innerText,
                                                proposal.id
                                            )
                                        }
                                        id="title"
                                        className="input form-control border border-2 border-top-0 border-start-0 border-end-0 shadow-none pink fs-2 p-0"
                                        role="textbox"
                                        contentEditable
                                    >
                                        {proposal.title}
                                    </span>
                                </div>
                                <div
                                    className="col ms-auto px-0 btn border-0"
                                    onClick={() => deleteProposal(proposal.id)}
                                >
                                    <i className="fa-solid fa-trash-can icon"></i>
                                </div>
                            </div>
                            <div className="card border-0 p-2 shadow-lg">
                                <div className="card-body py-1">
                                    <label htmlFor="old" className="form-label">
                                        Original version
                                    </label>
                                    <span
                                        onBlur={(e) =>
                                            handleChange(
                                                "old_",
                                                e.target.innerText,
                                                proposal.id
                                            )
                                        }
                                        id="old"
                                        className="input form-control border border-1"
                                        role="textbox"
                                        contentEditable
                                    >
                                        {proposal.old_}
                                    </span>
                                </div>
                                <i className="mx-auto fa-solid fa-arrow-down fa-2x"></i>
                                <div className="card-body py-1">
                                    <label htmlFor="new" className="form-label">
                                        New version
                                    </label>
                                    <span
                                        onBlur={(e) =>
                                            handleChange(
                                                "new_",
                                                e.target.innerText,
                                                proposal.id
                                            )
                                        }
                                        id="new"
                                        className="input form-control border border-1"
                                        role="textbox"
                                        contentEditable
                                    >
                                        {proposal.new_}
                                    </span>
                                </div>
                                <div className="row m-2 align-items-end">
                                    <div className="col">
                                        <label
                                            htmlFor="formFile"
                                            className="form-label"
                                        >
                                            Select images
                                        </label>
                                        <input
                                            className="file form-control"
                                            type="file"
                                            accept="image/*"
                                            id="formFile"
                                            /*onChange={addImages}*/ multiple
                                        />
                                    </div>
                                    <span className="col btn border-0 fs-xl text-end">
                                        + Add proponent
                                        <i className="fa-solid fa-circle-user fa-xl"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            ))}
        </div>
    );
}
 
export default ProposalsList;