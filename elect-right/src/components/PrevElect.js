import React, { useState } from 'react';


const PrevElect = ({ email}) => {
    const [elects] = useState([
        {id:1, 'name':'Plan for social housing', 'data':'10-01-22', 'votes':30, 'code':'A2FG5J'},
        {id:2,'name':'Water piping maintance', 'data':'10-01-22', 'votes':30, 'code':'A3FG5J'},
        {id:3,'name':'Rebuilding project for primary school', 'data':'10-01-22', 'votes':30, 'code':'GT68HG'}
    ]);

    return(
        <div className="prevElect">
            <h2>Previous elections</h2>
            <table className="electRow">
                <tr>
                    <th>All</th>
                    <th>Secret</th>
                    <th>Public</th>
                    <th>As President</th>
                    <th>As Secretary</th>
                    <th className="Blank"></th>
                    <td className='newElect'><button>+ New Election</button>
                    </td>
                </tr>
                {elects.map((elect) => (
                    <tr className="elect-preview" key={elect.id}>
                        <td>
                            {elect.name}
                        </td>
                        <td>
                            {elect.data}
                        </td>
                        <td>
                            {elect.votes}
                        </td>
                        <td>
                            {elect.code}
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default PrevElect;