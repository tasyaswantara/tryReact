import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Nav'


//internal css js
const judul={
  color:'white',
  backgroundColor:'black',
  textTransform:'capitalize'
}

let myname="syuuu"
let time= new Date().toDateString()
let gambar="https://source.unsplash.com/user/erondu/600x300"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navigation/>
  <h1 style={judul}>{`heloo guyyss myname is  ${myname}`}</h1>
  <h1>{`${Math.random()}`}</h1>
  <h1>{`${time}`}</h1>
  <img src={`${gambar}`} alt="gambar afanich"/>
  <h2>Hahaha</h2>
  <div className="container">
    <div className="card">
      <h1>Practice</h1>
      <img className="gbranjay" src="https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="gbr apaa"/>
    </div>
  </div>
  </BrowserRouter>
  
)