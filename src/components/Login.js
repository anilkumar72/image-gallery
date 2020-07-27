import React, {useState} from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';



const Login = ({dispatch, isAuth}) => {
    const history = useHistory();
    const [login, SetLog] = useState({
        uName: '',
        pass: '',
        error:false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(login.uName==='admin'&&login.pass==='pass'){

            dispatch({
                type: 'SET_AUTH'
            })
            history.push("/edit");
        }else {
            SetLog({
                ...login,error: true
            })
            setTimeout(()=>{
                SetLog({
                    ...login,error: false
                })
            },1500)
        }
    }
    const handleChange = (e) => {
        const value = e.target.value;
        SetLog({
            ...login,
            [e.target.name]: value
        });
    }
    return (
        <Wrapper>
            <div className='formdiv'>

                <h1 className='login-title'>Login</h1>

                <form onSubmit={handleSubmit}>
                 <input type='text' value={login.uName} placeholder='User Name' name='uName'
                           onChange={handleChange}/><br/>
                    <input type='text' value={login.pass} placeholder='Password' name='pass' onChange={handleChange}/><br/>
                    <button onClick={handleSubmit} type='submit'>Submit</button>


                </form>
                <p>admin/pass</p>
                <p className='err-msg'>{login.error&&`Please enter valid login details`}</p>
            </div>
        </Wrapper>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.fetchAuth.auth
    }
}
export default connect(mapStateToProps)(Login);

const Wrapper = styled.section`
display: flex;
justify-content: center;
.formdiv{
width: 400px;
height: 45vh;
flex-direction: column;
display: flex;
border: 1px solid darkgray;
border-radius: 5px;
margin-top: 70px;
align-items: center;
.login-title{
}
form{
width: 80%;
flex-direction: column;
display: flex;
input{
padding-left: 10px;
border-radius: 3px;
font-family: Roboto,sans-serif;
height: 45px;
outline: none;
font-size: 17px;
border: 1px solid black;
}
button{
height: 45px;
width: 120px;
color: #fff;
border: none;
font-size: 18px;
outline-style: none;
background-color: 
#3492ff;
align-self: center;
cursor: pointer;

}
}
}
.err-msg{
color: red;
font-family: Roboto,sans-serif;
font-size: 20px;
margin-top: 25px;

}

`;