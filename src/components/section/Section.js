import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from "axios";
import {API_LINK} from "../../api/Unsplash";
import Image from "./Image";


const Wrapper = styled.section`
display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(12, 5vw);
    grid-gap: 15px;
`;

export default () => {
    const [Idata, SetIdata] = useState([])
    useEffect(() => {
        axios.get(API_LINK).then(resp => SetIdata(resp.data))

    }, [])
    return (
        <Wrapper>
            {
                Idata.map((item, index) => {
                    const url = item.urls.regular;
                    return <Image imgsrc={url} key={index} imgclass={`img${index}`}/>
                })
            }
        </Wrapper>
    )
}