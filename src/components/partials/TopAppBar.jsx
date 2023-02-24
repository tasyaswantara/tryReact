import React from "react";
import styled from "styled-components";
import { ButtonGroup, Button} from "@mui/material";

const TopNav = styled.nav`
  padding: 10px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  max-width:900px;
  background-color: rgb(245, 245, 245);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (min-width: 700px) {
    padding: 20px 200px;
  }
`
export const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: center;
    text-align: center;
    background-color:rgb(245, 245, 245);
    `
    const judul={
       fontSize:'35px',
        margin:'5px 0',
        
      }
const TopAppBar = () => {
  return (
    <TopNav> 
         <h2 style={judul}>Swan Shop.</h2>          
        <ButtonGroup variant="text" aria-label="small button group" color="secondary" size="small" >
          <Button>Home</Button>
          <Button>Kategori</Button>
          <Button>Contact Us</Button>
          <Button>About Us</Button>
        </ButtonGroup>
        
      
    </TopNav>
  );
};

export default TopAppBar;
