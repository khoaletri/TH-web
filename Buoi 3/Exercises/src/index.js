import React from "react";
import ReactDOM from "react-dom";

const smartPeople = [
    { name:'Johann Geothe' ,age: 82, IQ: 210 },
    { name:'Albert Eisnstein' ,age: 76, IQ: 205 },
    { name:'Leonardo da Vinci' ,age: 67, IQ: 180 },
    { name:'Issac Newton' ,age: 84, IQ: 190 },
    { name:'James Maxwell' ,age: 48, IQ: 190 },
    { name:'Rudolf Clausicus' ,age: 66, IQ: 190 },
    { name:'Nicolaus Copernicus' ,age: 70, IQ: 160 },
    { name:'Gottfried Leibniz' ,age: 70, IQ: 182 },
    { name:'William Sidis' ,age: 46, IQ: 200 }
]

const element = (
    <ul>
        {smartPeople.map((i) => (
            <li key={i}>{i}</li>
        ))}
    </ul>
);

document.getElementById("demo").innerHTML = smartPeople;

ReactDOM.render(element, document.getElementById('root'));