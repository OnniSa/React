import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Person(props){
    return(
        <div className="person">
          <h1>{props.name}</h1>
          <p>Age: {props.age}</p>
        </div>
    )
}
const app = (
    <div>
        <Person name="Kati" age="29" />
        <Person name="Anne" age="25" />
        <Person name="Jeesus" age="2019" />
        <Person name="Janni" age="19" />
        <Person name="Luise" age="20" />
    </div>

);

ReactDOM.render(app, 
document.getElementById('root'));


