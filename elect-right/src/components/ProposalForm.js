import {useState} from "react";

const Proposals = () => {
    
    const input = {
        textAlign: "left",
        border: "none",
        outline: "none",
        boxShadow: "none",
    };

    const card = {
        color: "white",
        backgroundColor: "#0090AC",
    };

    const inputCard = {
        backgroundColor: "rgba(255,255,255,0.15)",
        color: "white",
        border: "dashed",
    };

    const borderOld = {
        borderColor: "white",
    }

    const borderNew = {
        borderColor: "#E91D63",
    }

    const btn = {
        color: `white`,   
    }

    return (
        <form>
            <div class="text-start my-3 px-1">
                <div class="input-group d-flex align-items-center">
                    <input type="text" id="title" placeholder="Proposal title" class="form-control pink fs-2 my-0 pb-1" style={input}/>
                </div>
                <div class="card p-3 border-0" style={card}>
                    <div class="card-body">
                        <textarea type="text" id="old" placeholder="Original version" class="form-control" style={{ ...input, ...inputCard, ...borderOld }}/>
                    </div>
                    <i class="mx-auto
                     fa-solid fa-arrow-down fa-2x"></i>
                    <div class="card-body">
                        <textarea type="text" id="new" placeholder="New version" class="form-control" style={{ ...input, ...inputCard, ...borderNew }}/>
                    </div>
                    <div class="row mx-2">
                        
                        <span class="btn border-0 col fs-5 text-end" style={btn}>+ Add proponent <i class="fa-solid fa-circle-user fa-2xl"></i></span>
                    </div>
                </div>
            </div>
        </form>
    );
}
 
export default Proposals;