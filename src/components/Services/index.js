import React from 'react'
import styled from "styled-components"
import Service from './Service'
import info from "./info"


const ServiceLayer = () => {
    return (
        <StyledServiceLayer>
            <Service info={info[0]}/>
            <Service info={info[1]}/>
            <Service info={info[2]}/>
            <Service info={info[3]}/>
            
        </StyledServiceLayer>
    )
}
const StyledServiceLayer = styled.div`
background: #f4efec;
display: grid;
padding: 70px;
grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export default ServiceLayer
