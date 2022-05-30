import {useState} from "react";
import '../css/DisplayForm.css'

const Displays = () => {

    return (

            <div class="row align-items-center">
                
                <div class="text-start my-3"></div>

                {/* Form Title */}
                <div placeholder="Ballot title" class="form-title my-0 pb-1">
                    Children's Play Park Project
                    <p>
                        Session: <span class="pink"> AS23D1 </span>
                    </p>
                </div>

                <div class="text-div my-3"></div>

                {/* Main Form */}
                <div class="prop-title d-flex align-items-center">
                    <div id="title" placeholder="Proposal title" class="pink fs-2 my-0 pb-1">
                        {/* To be changed to correct text */}
                        Proposal 1 <span class="less-pink">- Alteration to point 4.a</span>
                    </div>
                </div>

                <div class="card p-3 border-0 m-1">
                    <div class="card-body">
                        <div id="oldDisplay" placeholder="Original version" class="border-old border-true">
                            {/* To be changed to correct text */}
                            The park must be cleaned and desinfected 2 times a week.
                        </div>
                    </div>

                    <i class="mx-auto fa-solid fa-arrow-down fa-2x"></i>

                    <div class="card-body">
                        <div type="text" id="new" placeholder="New version" class="border-new border-true">
                            {/* To be changed to correct text */}
                            The park must be cleaned and desinfected 3 times a week.
                        </div>
                    </div>
                    
                    <div class="user-img align-items-end">
                        <i class="fa-solid fa-user" alt="user"></i>
                        Maria Dias
                    </div>
                </div>

                <div class="info">
                    {/* To be changed to correct text */}
                    Access <span>Play Park Project, Section 3, Article 4</span> 
                </div>

                <div class="text-div my-4"></div>

                {/* Declaration of Intent */}
                <div class="d-flex align-items-center">
                    <div id="title" placeholder="Proposal title" class="less-pink">
                        Declaration of Intent 
                    </div>
                </div>

                <div class="card p-3 border-0 m-1">
                    <textarea type="text" id="declaration" placeholder="write your declaration of intent here" class="form-control border-old" />
                    <button class="button-1">Submit</button>
                </div>

                <div class="text-div my-4"></div>

            </div>
        
    );
}
 
export default Displays;