const Proposals = ({id, title, original, altered, proponentList, referenceDoc, imageList }) => {
    
    const inputTitle = {
        textAlign: "left",
        border: "none",
        outline: "none",
        boxShadow: "none",
        fontSize: "26pt",
    };

    const card = {
        color: "white",
        backgroundColor: "#0090AC",
    }

    return (
        <form>
            <div class="text-start my-3 px-1">
                <input type="text" id="title" placeholder="New title" class="form-control pink" style={inputTitle}/>
                <div class="card border-0" style={card}>
                    <div class="card-body">
                        <div class="card-text">
                            Bye
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
 
export default Proposals;