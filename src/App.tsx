import React from 'react';
import './App.css';
import {Component1} from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import {Data} from "./Data";

function App() {

    let checkboxesData: Data[] = [
        {id: 11, value: "CEO"},
        {id: 22, value: "MANAGER"},
        {id: 33, value: "HR"},
    ];

    return (
        <div className="App">
            <Component1 checkboxesData={checkboxesData} />
            <Component2 checkboxesData={checkboxesData} />
            <Component3 checkboxesData={checkboxesData} />
        </div>
    );
}

export default App;