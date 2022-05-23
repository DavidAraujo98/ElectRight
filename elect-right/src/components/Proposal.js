const Proposals = ({ id, num, title, original, altered, proponentList, referenceDoc, imageList}) => {
    
    const input = {
        textAlign: "left",
        border: "none",
        outline: "none",
        boxShadow: "none",
    };

    const card = {
        color: "white",
        backgroundColor: "#0090AC",
    }

    return (
        <form>
            <div class="text-start my-3 px-1">
                <div class="input-group d-flex align-items-center">
                    <h3 class="py-0 my-0" >Proposal {num}</h3>
                    <input type="text" id="title" placeholder="New title" class="form-control pink fs-2 my-0 py-0" style={input}/>
                </div>
                <div class="card border-0" style={card}>
                    <div class="card-body">
                        <textarea type="text" id="title" placeholder="Original version" class="form-control pink my-0 py-0" style={input}/>
                    </div>
                </div>
            </div>
        </form>
    );
}
 
export default Proposals;