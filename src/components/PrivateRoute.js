import React from 'react'
import styled from 'styled-components'
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, isAuth, ...rest}) => {

    return (
        <Route {...rest} component={(props) => isAuth ? <Component {...props} /> : <Redirect to='/login'/>

        }/>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: !!state.fetchAuth.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute)