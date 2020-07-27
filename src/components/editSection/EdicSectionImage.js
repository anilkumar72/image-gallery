import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";
import EditData from "../../misc/EditData";
import {update_data} from "../../redux/fetchDataReducer";


const Wrapper = styled.section`
display: flex;
justify-content: center;
margin-bottom: 40px;
`;
const MainBlock = styled.div`
width: 70vw;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 15px 0 0;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  100px 0 80px rgba(0, 0, 0, 0.12);
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
padding-left: 10px;
border-radius: 3px;
font-family: Roboto,sans-serif;
height: 45px;
outline: none;
font-size: 17px;
margin-bottom: 15px;
border: 1px solid black;
}
.successtext{
position: absolute;
}
}
button{
height: 55px;
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