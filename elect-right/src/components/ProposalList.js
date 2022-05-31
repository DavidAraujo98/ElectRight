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
                <form id={proposal.id} class="my-3">
                    <div class="col align-items-center">
                        {/* Main Form */}
                        <div class="row-8 text-start my-2">
                            <div class="row align-items-center mx-auto">
                                <div class="col-11 ps-0 me-auto">
                                    <input value={proposals.title} onBlur={(e) => handleChange("title", e.target.value, proposal.id)} type="text" id="title" placeholder="Proposal title" class="form-control pink fs-2 p-0 rounded-pill"/>
                                </div>
                                <div class="col ms-auto px-0 btn border-0" onClick={() => deleteProposal(proposal.id)} ><i class="fa-solid fa-trash-can icon"></i></div>
                            </div>
                            <div class="card border-0 p-2">
                                <div class="card-body py-1">
                                    <label for="old" class="form-label">Original version</label>
                                    <span onBlur={(e) => handleChange("old_", e.target.innerText, proposal.id)} id="old" class="input form-control border border-1 border-old" role="textbox" contentEditable></span>
                                </div>
                                <i class="mx-auto fa-solid fa-arrow-down fa-2x"></i>
                                <div class="card-body py-1">
                                    <label for="new" class="form-label">New version</label>
                                    <span onBlur={(e) => handleChange("new_",e.target.innerText, proposal.id)} id="new" class="input form-control border border-1 border-new" role="textbox" contentEditable></span>
                                </div>
                                <div class="row m-2 align-items-end">
                                    <div class="col">
                                        <label for="formFile" class="form-label">Select images</label>
                                        <input class="file form-control" type="file" accept="image/*" id="formFile" /*onChange={addImages}*/ multiple/>
                                    </div>
                                    <span class="col btn border-0 fs-xl text-end" >+ Add proponent <i class="fa-solid fa-circle-user fa-xl"></i></span>
                                </div>
                                <div class="row">
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