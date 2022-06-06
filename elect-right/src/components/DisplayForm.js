import {useState} from "react";
import '../css/DisplayForm.css'

const Displays = () => {

    return (

            <div className="row align-items-center">
                
                <div className="text-start my-3"></div>

                {/* Form Title */}
                <div placeholder="Ballot title" className="form-title my-0 pb-1">
                    Children's Play Park Project
                    <p>
                        Session: <span className="pink"> AS23D1 </span>
                    </p>
                </div>

                <div className="text-div my-3"></div>

                {/* Main Form */}
                <div className="prop-title d-flex align-items-center">
                    <div id="title" placeholder="Proposal title" className="pink fs-2 my-0 pb-1">
                        {/* To be changed to correct text */}
                        Proposal 1 <span className="less-pink">- Alteration to point 4.a</span>
                    </div>
                </div>

                <div className="card p-3 border-0 m-1">
                    <div className="card-body">
                        <div id="oldDisplay" placeholder="Original version" className="border-old border-true">
                            {/* To be changed to correct text */}
                            The park must be cleaned and desinfected 2 times a week.
                        </div>
                    </div>

                    <i className="mx-auto fa-solid fa-arrow-down fa-2x"></i>

                    <div className="card-body">
                        <div type="text" id="new" placeholder="New version" className="border-new border-true">
                            {/* To be changed to correct text */}
                            The park must be cleaned and desinfected 3 times a week.
                        </div>
                    </div>
                    
                    <div className="user-img align-items-end">
                        <i className="fa-solid fa-user" alt="user"></i>
                        Maria Dias
                    </div>
                </div>

                <div className="info">
                    {/* To be changed to correct text */}
                    Access <span>Play Park Project, Section 3, Article 4</span> 
                </div>

                <div className="text-div my-4"></div>

                {/* Declaration of Intent */}
                <div className="d-flex align-items-center">
                    <div id="title" placeholder="Proposal title" className="less-pink">
                        Declaration of Intent 
                    </div>
                </div>

                <div className="card p-3 border-0 m-1">
                    <textarea type="text" id="declaration" placeholder="write your declaration of intent here" className="form-control border-old" />
                    <button className="button-1">Submit</button>
                </div>

                <div className="text-div my-4"></div>

            </div>
        
    );
}
 
export default Displays;