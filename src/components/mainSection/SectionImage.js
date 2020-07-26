import React, {useState} from 'react'
import styled from 'styled-components'
import '../../styles.css'
import OverLay from "./OverLay";

const ImageBlock = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
`;

const SectionImage = (props) => {

    const [Overlay,setOverlay]=useState(false)

    const handelOverlay = () => {
        setOverlay(true)
    }
    const handleRemoveOverlay = () => {

        setOverlay(false)
    }

    return (<>
            <ImageBlock src={props.imgsrc} className={props.imgclass} alt={props.imgclass} onMouseOver={handelOverlay}
            />
            { Overlay&& <OverLay imgclass={props.imgclass} description={props.description} userName={props.userName}
                                 handleRemoveOverlay={handleRemoveOverlay} profileImg={props.profileImg}/>}
        </>
    )
}



export default SectionImage;