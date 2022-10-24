import React from "react";
import styled from "@emotion/styled";
import SideBar from "../components/SideBar";
import ExtractContent from "../components/ExtractContent";

const ExtractContainer = styled.div`
    display: flex;
    width: 100%;
    min-heigth: 100vh;
    background-color: #fff;
`

export default function Extract (){
    return (
        <ExtractContainer>
            <SideBar/>
            <ExtractContent/>               
        </ExtractContainer>
    )
}

