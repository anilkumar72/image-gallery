import React from 'react';
import './styles.css';
import Header from "./components/Header";
import Section from "./components/mainSection/Section";
import { Switch, Route } from 'react-router-dom';
import EditImages from "./components/editSection/EditContainer";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

function App() {

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={Section}/>
                {/*<Route exact path='/edit' component={EditImages}/>*/}
                <PrivateRoute  exact path='/edit' component={EditImages} />
                <Route exact path='/login' component={Login}/>
            </Switch>

        </div>
    );
}

export default App;
