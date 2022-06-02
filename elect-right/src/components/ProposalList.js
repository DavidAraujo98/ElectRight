import { useState } from 'react';
import '../css/ProposalList.css';

const ProposalsList = ({proposals, deleteProposal, editProposal}) => {

    const [images, setImages] = useState([]);

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
        editProposal(proposal[0], i)
    }


    return (
        <div>
            {proposals.map(proposal => (
                <form id={proposal.id} className="my-3">
                    <div className="col align-items-center">
                        {/* Main Form */}
                        <div className="row-8 text-start my-2">
                            <div className="row align-items-center mx-auto">
                                <div className="col-11 ps-0 me-auto">
                                    <input value={proposals.title} onBlur={(e) => handleChange("title", e.target.value, proposal.id)} type="text" id="title" placeholder="Proposal title" className="form-control pink fs-2 p-0"/>
                                </div>
                                <div className="col ms-auto px-0 btn border-0" onClick={() => deleteProposal(proposal.id)} ><i className="fa-solid fa-trash-can icon"></i></div>
                            </div>
                            <div className="card border-0 p-2">
                                <div className="card-body py-1">
                                    <label htmlFor="old" className="form-label">Original version</label>
                                    <span onBlur={(e) => handleChange("old_", e.target.innerText, proposal.id)} id="old" className="input form-control border border-1 border-old" role="textbox" contentEditable></span>
                                </div>
                                <i className="mx-auto fa-solid fa-arrow-down fa-2x"></i>
                                <div className="card-body py-1">
                                    <label htmlFor="new" className="form-label">New version</label>
                                    <span onBlur={(e) => handleChange("new_",e.target.innerText, proposal.id)} id="new" className="input form-control border border-1 border-new" role="textbox" contentEditable></span>
                                </div>
                                <div className="row m-2 align-items-end">
                                    <div className="col">
                                        <label htmlFor="formFile" className="form-label">Select images</label>
                                        <input className="file form-control" type="file" accept="image/*" id="formFile" /*onChange={addImages}*/ multiple/>
                                    </div>
                                    <span className="col btn border-0 fs-xl text-end" >+ Add proponent <i className="fa-solid fa-circle-user fa-xl"></i></span>
                                </div>
                                <div className="row">
                                    {images}
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