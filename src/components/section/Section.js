import React, {useEffect} from 'react'
import styled from 'styled-components'
import Image from "./Image";
import {connect} from "react-redux";
import {thunk_action_creator} from "../../redux/fetchDataReducer";


const Wrapper = styled.section`
display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(12, 5vw);
    grid-gap: 15px;
`;

const Section= ({imgData,dispatch}) => {
    useEffect(() => {
     dispatch(thunk_action_creator())
        console.log(imgData)

    })
    return (
        <Wrapper>
            {
                Array.from(imgData).map((item, index) => {
                    const url = item.urls.regular;
                    const description = item.description;
                    return <Image imgsrc={url} key={index} imgclass={`img${index}`} description={description}/>
                })
            }
        </Wrapper>
    )
}

const mapStateToProps=(state)=>{
    return{
        imgData:state.imgData
    }
}

export default connect(mapStateToProps)(Section);