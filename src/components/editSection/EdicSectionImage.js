import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";
import EditData from "../../misc/EditData";
import {update_data} from "../../redux/fetchDataReducer";


const Wrapper = styled.section`
display: flex;
justify-content: center;
margin-bottom: 20px;
`;
const MainBlock = styled.div`
width: 70vw;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 15px 0 0;
box-shadow: rgba(8, 76, 255, 0.23) 2px 2px 10px 0;
img{
width: 600px;
height: 400px;
object-fit: cover;
}
`;
const TextDiv = styled.div`
width: 40%;
display: flex;
flex-direction: column;
img{
width: 80px;
height: 80px;
object-fit: cover;
border-radius: 50px;
margin-bottom: 10px;
align-self: center;
}
.inputDiv{
height: 145px;
flex-direction: column;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
input{
height: 30px;
box-shadow: rgba(8, 76, 255, 0.23) 2px 2px 10px 0;
    font-size: 18px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    border-image: initial;
    font-family: Roboto,sans-serif;
}
.successtext{
position: absolute;
}
}
button{
background-color: rgb(8, 76, 255);
height: 50px;
color: #fff;
font-size: 20px;
border: none;
outline: none;
 font-family: Roboto,sans-serif;
 cursor: pointer;
}

`;

const EditSectionImage = ({imgsrc, description, userName, profileImg, imgData, upindex, dispatch}) => {

    const [inputValue, setInputValue] = useState({
        userName: userName,
        description: description
    })
    const [succ,setSucc]=useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        const newDataArray = EditData(imgData, upindex, inputValue.userName, inputValue.description);
        dispatch(update_data(newDataArray))
        setSucc(true)
    }
    const handleChange = (e) => {
            const value = e.target.value;
        setInputValue({
                ...inputValue,
                [e.target.name]: value
            });
    }
    useEffect(()=>{
       succ&&setTimeout(()=>{
            setSucc(false)
        },2000)
    },[succ])
    return (
        <Wrapper>
            <MainBlock>
                <img src={imgsrc} alt={userName}/>
                <TextDiv>
                    <img src={profileImg} alt={userName}/>
                    <form className='inputDiv' onSubmit={handleSubmit}>
                        <input type='text' value={inputValue.userName} name='userName' placeholder='user name' onChange={handleChange}
                        />
                        <input type='text' value={inputValue.description} name='description' placeholder='description' onChange={handleChange}/>
                        <button onClick={handleSubmit}>save</button>
                    </form>

                    {succ?<p className='successtext'>Successfully updated</p>:  <p>. </p>}
                </TextDiv>

            </MainBlock>
        </Wrapper>
    )
}
const mapStateToProps = (state) => {
    return {
        imgData: state.fetchData.imgData
    }
}
export default connect(mapStateToProps)(EditSectionImage)