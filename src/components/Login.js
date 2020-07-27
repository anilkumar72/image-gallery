import React from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";
import { useHistory } from 'react-router-dom';


const Wrapper = styled.section`

`;

const Login= ({dispatch,isAuth}) => {
    const history =useHistory();

  const handleclick=(e)=>{
      e.preventDefault()
      dispatch({
          type:'SET_AUTH'
      })
      history.push("/edit");
  }
    return (
        <Wrapper>

            <button onClick={handleclick}>click</button>

        </Wrapper>
    )
}
const mapStateToProps=(state)=>{
    return{
        isAuth:state.fetchAuth.auth
    }
}
export default connect(mapStateToProps)(Login);