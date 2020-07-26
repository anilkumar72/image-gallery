import React from 'react';
import './styles.css';
import Header from "./components/Header";
import Section from "./components/mainSection/Section";
import {Route} from "react-router-dom";
import EditImages from "./components/editSection/EditContainer";

function App() {

    return (
        <div className="App">
            <Header/>
           <Route exact path='/' component={Section}/>
            <Route exact path='/edit' component={EditImages}/>
        </div>
    );
}

export default App;
