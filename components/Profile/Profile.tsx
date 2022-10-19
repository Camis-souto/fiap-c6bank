import React from 'react'
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f8f8f8;
    font-family: sans-serif;
    background-color: #2424;
    width: 100%;
    padding-bottom: 20px;
    h2, h3 {
      margin:0;
      font-weight:50%
    }
`;

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-botton: 20px;
`

export default function Profile() {
  return (
    <ProfileContainer>
       <AvatarContainer>
        <Avatar alt="Camilla Souto" src='https://avatars.githubusercontent.com/u/104527029?s=400&u=a4c07f79c7a6c7e848b63c17f8156951f6eb6d5c&v=4'sx={{ width: 200,
        height: 200}} />
        <h2>Camilla Souto</h2>
        <h3>SoftWare Enginner</h3>
        </AvatarContainer>
    </ProfileContainer>
  )
}
