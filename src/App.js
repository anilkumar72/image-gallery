import React from 'react';
import './styles.css';
import Header from "./components/Header";
import Section from "./components/section/Section";
import {Route} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <Header/>
           <Route exact path='/' component={Section}/>
        </div>
    );
}

export default App;
