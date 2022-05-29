import '../css/ProposalForm.css';

const Proposals = ({ id }) => {
    
    const differenceCheck = (e) => {
        var oldText = document.getElementById(id + "old").textContent;
        var newText = document.getElementById(id + "new").textContent;
        var diff1 = "";
        var diff2 = "";
        newText.split('').forEach(function(val, i){
            if (val != oldText.charAt(i)) {
                diff1 += "<b class='highlight-new'>" + val + "</b>";
                diff2 += "<b class='highlight-old'>" + oldText.charAt(i) + "</b>";
            } else {
                diff1 += val;
                diff2 += oldText.charAt(i);
            }
        });
        document.getElementById(id + "new").innerHTML = diff1.concat(newText.substring(diff1.length));
        document.getElementById(id + "old").innerHTML = diff2.concat(oldText.substring(diff1.length));
    };

    return (
        <form id={id} class="my-5">
            <div class="col align-items-center">
                {/* Main Form */}
                <div class="row-8 text-start my-2">
                    <div class="input-group d-flex align-items-center">
                        <input type="text" id="title" placeholder="Proposal title" class="form-control pink fs-2 my-0 pb-1"/>
                    </div>
                    <div class="card p-3 border-0">
                        <div class="card-body">
                            <label for={id + "old"} class="form-label">Original version</label>
                            <span id={id + "old"} class="input form-control border-old" role="textbox" contentEditable onFocus={e => differenceCheck()}></span>
                        </div>
                        <i class="mx-auto fa-solid fa-arrow-down fa-2x"></i>
                        <div class="card-body">
                            <label for={id + "new"} class="form-label">New version</label>
                            <span  id={id + "new"} class="input form-control border-new" role="textbox" contentEditable onFocus={e => differenceCheck()}></span>
                        </div>
                        <div class="row m-2 align-items-end">
                            <div class="col">
                                <label for="formFile" class="form-label">Select images</label>
                                <input class="file form-control" type="file" id="formFile" multiple/>
                            </div>
                            <span class="col btn border-0 fs-xl text-end" >+ Add proponent <i class="fa-solid fa-circle-user fa-xl"></i></span>
                        </div>
                    </div>
                </div>
                {/* File */}
                <div class="row-2 m-auto area-pink rounded d-grid">
                    <div class="btn border-0 p-3">
                        <i class="fa-3x fa-solid fa-upload"></i>
                        <h5 class="m-0">Upload document</h5>
                    </div>
                </div>
            </div>
        </form>
    );
}
 
export default Proposals;