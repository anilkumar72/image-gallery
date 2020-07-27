import React from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";
import EdicSectionImage from "./EdicSectionImage";


const Wrapper = styled.section`
margin-top: 20px;
`;

const EditContainer = ({imgData}) => {
    return (
        <Wrapper>
            {Array.from(imgData).map((item, index) => {
                const url = item.url;
                const description = item.description;
                const username = item.username;
                const profileImg = item.profileImg;
                const upindex=index;
                return <EdicSectionImage imgsrc={url} key={upindex} upindex={upindex} imgclass={`img${index}`} description={description}
                                     userName={username} profileImg={profileImg}  imgData={imgData}/>
            })}
        </Wrapper>
    )
}
const mapStateToProps = (state) => {
    return {
        imgData: state.fetchData.imgData
    }
}

export default connect(mapStateToProps)(EditContainer);