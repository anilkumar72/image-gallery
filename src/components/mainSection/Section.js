import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import SectionImage from "./SectionImage";
import {connect} from "react-redux";
import {thunk_action_creator} from "../../redux/fetchDataReducer";


const Wrapper = styled.section`
display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(12, 5vw);
    grid-gap: 15px;
   margin: 15px;
`;
const Button = styled.button`
background-color: rgb(8, 76, 255);
height: 50px;
color: #fff;
font-size: 20px;
border: none;
outline: none;
 font-family: Roboto,sans-serif;
 cursor: pointer;
`;
const Section = ({imgData, dispatch}) => {

    // const [initload,setInitload]=useState(false)
    // useEffect(()=>{
    //     dispatch(thunk_action_creator())
    // },[initload])

    const pulldata=()=>{
        dispatch(thunk_action_creator())
    }

    return (
        <Wrapper>

                <Button onClick={pulldata}>Load Images</Button>
            {
                Array.from(imgData).map((item, index) => {
                    const url = item.url;
                    const description = item.description;
                    const username = item.username;
                    const profileImg = item.profileImg;

                    return <SectionImage imgsrc={url} key={index} imgclass={`img${index}`} description={description}
                                         userName={username} profileImg={profileImg}/>
                })}

        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        imgData: state.imgData
    }
}

export default connect(mapStateToProps)(Section);