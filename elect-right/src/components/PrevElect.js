import React, { useState } from 'react';
import '../css/PrevElect.css'
import { useNavigate} from 'react-router-dom';


const PrevElect = ({electsori, email}) => {
    const navigate = useNavigate();
    const [elects, setElects] = useState(electsori.filter(elect => (elect.president === email || elect.secretary === email || elect.voters.includes(email) )));
    const handleClick = (e, type, prop = null) => {

        if (type === 'all')
            setElects(electsori.filter(elect => (elect.president === email || elect.secretary === email || elect.voters.includes(email) )));
        else if ((type === 'type') && (prop !== null))
            setElects(electsori.filter(elect => ((elect.type === prop) && (elect.president === email || elect.secretary === email || elect.voters.includes(email) ))));
        else if (type === 'secretary')
            setElects(electsori.filter(elect => elect.secretary === email));
        else if (type === 'president')
            setElects(electsori.filter(elect => elect.president === email));
        else console.log('Something is not right!');


    }

    const buttonClick = (e) => {
        navigate("/editor");
    }

    const GoToElect = (e, code) => {
        navigate("/elect?=" + {code});
    }


    return(

        <div className="prevElect" align="left" >
            <h1 class="fs-1">Previous elections</h1>
            <table class="table" >
                <tr >
                    <th class="btn btn-default" onClick={(e) => handleClick(e,'all')}>All


                    </th>
                    <th class="btn" onClick={(e) => handleClick(e,'type', 'Secret')}>Secret</th>
                    <th class="btn" onClick={(e) => handleClick(e,'type', 'Public')}>Public</th>
                    <th class="btn" onClick={(e) => handleClick(e,'president')}>As President</th>
                    <th class="btn" onClick={(e) => handleClick(e,'secretary')}>As Secretary</th>
                    <th className="Blank"></th>
                    <td className='newElect' onClick={buttonClick}><button class="btn btn-elect rounded-pill px-4">+ New Election</button>
                    </td>
                </tr>
                {elects.map((elect) => (
                    <tr class="table-active" className="elect-preview" key={elect.id} onClick={(e)=>GoToElect(e,elect.code)}>
                        <td class="table-active">
                            {elect.name}
                        </td>
                        <td class="table-active">
                            {elect.data}
                        </td>
                        <td class="table-active">
                            {elect.votes}
                        </td>
                        <td class="table-active">
                            {elect.code}
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default PrevElect;