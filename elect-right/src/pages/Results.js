import Graphic from "../components/Graphic";
import React from "react";
import {useState} from "react";

const Results = () => { // {users, elect}

    const [elect] = useState(
        {id:1, 'name':"Children's Play PArk Project", 'data':'10-01-22', 'votes':30, 'code':'AS23D1', 'type':'Public', 'president':'angasf@gmail.com', 'secretary':'joeDoe@gmail.com', 'voters':['jane@gmail.com','jim@gmail.com','hight@gmail.com']},
        );

    const [users] = useState([
        {id:1, 'name':'Diogo Gomes', 'vote':'decline'},
        {id:2, 'name':'José Alves', 'vote':'accept'},
        {id:3, 'name':'Maria Dinis', 'vote':'accept'},
        {id:4, 'name':'Grabriela Jesus', 'vote':'decline'},
        {id:5, 'name':'Ines Sousa', 'vote':'accept'},
        {id:6, 'name':'Tomas Silva', 'vote':'decline'},
        {id:7, 'name':'Marta Dia', 'vote':'accept'},
        {id:8, 'name':'João Lopes', 'vote':'decline'},
        {id:9, 'name':'Ruben Ferreira', 'vote':'decline'},
        {id:10, 'name':'Ana Mendes', 'vote':'decline'}
        ]);
    //const {code, name} = useParams();

    return (
        <div className="results">
            <div>
                <h2>{elect.name}</h2>
                <h3>Session:{elect.code}</h3>
            </div>
            <div>
                 <div>
                      <h4>Results</h4>
                     {/* <Graphic elect={users}/> */}
                </div>
                <div>
                    <h4>Votes</h4>
                </div>
            </div>
        </div>

    );
}

export default Results;