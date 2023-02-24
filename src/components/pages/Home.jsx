import {Button} from "@mui/material";
import styled from "styled-components";
import AppLayout from "../partials/AppLayout";
import img1 from '../img/bunga.jpg';
import FormTweetCard from "../partials/Coba";

const Konten = styled.div`
    width: 1080px;
    min-height: 100vh;
    margin:auto;
    margin-top:50px;
    background-color:rgb(255, 255, 255);
    border-radius:30px;
`

  const Kiri = styled.div`
    width: 100%;
    min-height: 200px;
    text-align:left;
    background-color:rgb(242, 174, 185);
`
const gambar={
    width:'100%',
    height:'200px',
    objectFit:'none',
    margin:'auto',    
  }
  const Fotokecil = styled.div`
    width:20%;
    flex-direction: column;
    height:80px;
    margin: 10px 60px;
    background-color:rgb(242, 174, 185);
  `
const Home = () => {
    return (
        <AppLayout>
            <Kiri></Kiri>
            <Konten/>
            <FormTweetCard/>        
            </AppLayout>

    );
}

export default Home;
