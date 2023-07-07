import unityhousevideo from './videos/UnityHouse.mp4'
import logo from './3DVR.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col,
} from 'react-bootstrap'
import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

import Model from './Model.js'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

function Scene() {
  const obj = useLoader(OBJLoader, '/models/gif_house.gltf')
  return <primitive object={obj} />
}

// var video = document.getElementById("myVideo");
// video.oncanplaythrough = function() {
  //     video.muted = true;
  //     video.play();
  //   }
  
  function App() {
    
 

    return (
      
      /* Welcome to this react app. 
      
      App.js is the main page where most scripts are 
      contained. */
      
      
      
      <div className="App">
      {/* Below is the beginning section for the app header*/}

      <header  className="App-header">
       
    </header>

    {/* Start of the app-body */}
    <body className = "App-body">

     
     {/*-------Start top navbar section -------*/}
<div class="topnav" id="myTopnav">
<a  href="#home">3dvr.tech</a>
<a  href="#home">Home</a>
<a href="#what-we-do-section">What We Do</a>
<a href ="#projects-section">Projects</a>
<a href="#biography-section">Biography</a>
<a href="#home"><img src={logo} className="nav-logo" alt="logo"></img></a>
</div>
{/*---------- end top-nav---------*/}

     {/*---------------------  logo    ------------------------*/}
     <div id="home">
      <img src={logo} className="App-logo" alt="logo" />
        {/* above is the import for the logo */}
        
        {/* Productions */}
        <p className= "Productions">
          Productions
        </p>
        
        {/* Catchphrase */}
        <p className="Catch-phrase">
        Build The Future
        </p>

        </div>


      </body>
      

    </div>
  );
}

export default App;
