import React, {useState} from 'react'
import styled from 'styled-components'
import  '../../styles.css'
import OverLay from "./OverLay";


const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
`;

export default ({imgsrc,imgclass}) => {
    const [overlay,setOverlay]=useState(false);


    return (<>
        <Image src={imgsrc} className={imgclass} alt={imgclass}  onMouseOver={() => setOverlay(true)}
             />
            {overlay && <OverLay imgclass={imgclass} onMouseLeave={() => setOverlay(false)}  />
           }

</>
    )
}