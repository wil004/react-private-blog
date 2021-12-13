import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

 function Login ({click, falseClick, Login, Logcaption, textt, disabled}) {
const history = useHistory();
function goBack() {
    history.push("/");
}

    const [userInput, setUserInput] = useState('');
    const users = ['william', 'caca', 'tyler']

    return (
<section id="login">
<h1>{Logcaption}</h1>
<p>Caca Tyler en William zijn namen die in het systeem staan</p>
    <input type={textt} onChange={(e) => {setUserInput(e.target.value.toLowerCase())}}
           value={userInput} disabled={disabled}/>
    {users.includes(userInput) ? <input type="button" onClick={click} value={Login} /> : <input type="button"
    onClick={falseClick} value={Login}/>}


    <button type="button" onClick={goBack}>
        Terug naar home
    </button>
</section>
    )

}
 export default Login