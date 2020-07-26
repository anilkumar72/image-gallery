import React from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";
import EdicSectionImage from "./EdicSectionImage";


const Wrapper = styled.section`

`;

const EditContainer = ({imgData}) => {
    return (
        <Wrapper>
            {Array.from(imgData).map((item, index) => {
                const url = item.url;
                const description = item.description;
                const username = item.username;
                const profileImg = item.profileImg;
                return <EdicSectionImage imgsrc={url} key={index} imgclass={`img${index}`} description={description}
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

export default connect(mapStateToProps)(EditContainer);