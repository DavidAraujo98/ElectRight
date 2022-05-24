import {useState} from "react";
import '../css/ProposalForm.css'

const Proposals = () => {

    return (
        <form>
            <div class="row align-items-center">
                {/* File */}
                <div class="col-2">
                    <div class="area-pink rounded">
                        <i class="p-3 fa-3x fa-solid fa-upload"></i>
                        <h5>Upload document</h5>
                    </div>
                </div>
                {/* Arrow */}
                <i class="col-1 m-autpo fa-solid fa-arrow-right fa-2xl"></i>
                {/* Main Form */}
                <div class="col-8 text-start m-2 px-1">
                    <div class="input-group d-flex align-items-center">
                        <input type="text" id="title" placeholder="Proposal title" class="form-control pink fs-2 my-0 pb-1"/>
                    </div>
                    <div class="card p-3 border-0">
                        <div class="card-body">
                            <textarea type="text" id="old" placeholder="Original version" class="form-control border-old" />
                        </div>
                        <i class="mx-auto fa-solid fa-arrow-down fa-2x"></i>
                        <div class="card-body">
                            <textarea type="text" id="new" placeholder="New version" class="form-control border-new" />
                        </div>
                        <div class="row m-2 align-items-end">
                            <div class="col">
                                <label for="formFile" class="form-label">Select images</label>
                                <input class="file form-control" type="file" id="formFile" multiple/>
                            </div>
                            <span class="col btn border-0 fs-5 text-end" >+ Add proponent <i class="fa-solid fa-circle-user fa-2xl"></i></span>
                        </div>
                    </div>
                </div>
                {/* Main Form */}

            </div>
        </form>
    );
}
 
export default Proposals;