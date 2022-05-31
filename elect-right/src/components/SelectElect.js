import React, { useState } from 'react';
import '../css/SelectElect.css';

const SelectElect = ({ email}) => {

    const [codeElect, setElectCode] = useState();

    const handleSumit = (e) => {
        e.preventDefault();
        const infoForEnterElect = { email, codeElect }
        console.log(infoForEnterElect)
    }

    const handleClick = (e) => {
        if (e.target.value == 'Election Code'){
            setElectCode('');
        };
    }

    return(
        <div className="select-elect">
            <form onSubmit={handleSumit}>
                <h2 >Election taking place?</h2>
                {/* <h2>Want to vote?</h2> */}
                <label> Insert the election code bellow to access the voting ballot.</label>
                <input
                    type="text"
                    required
                    value={codeElect}
                    placeholder='Election Code'
                    placeholderTextColor="#000"
                    onClick={handleClick}
                    onChange={(e) => setElectCode(e.target.value)}/>
                <div>
                    <button>Access</button>
                </div>
            </form>
        </div>
    )
}

export default SelectElect;