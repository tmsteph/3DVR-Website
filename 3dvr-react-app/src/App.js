import logo from './3DVR.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Navbar, Nav
} from 'react-bootstrap'

function App() {
  return (

    /* Welcome to this app. 
    It is a portfolio website. 
    
    App.js is the main page where most scripts are 
    contained */


/* Here is the app header.  */
    <div className="App">
      {/* Below is the beginning section for the app header*/}
      <header  className="App-header">
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
      </header>

    {/* Start of the app-body */}
      <body className = "App-body">

        {/*-------- introduction section -------- */}

        <div className = "introduction-section">

{/* First blurb  */}

          {/* <Container> */}
            <h2 className = "we-are-a">We are an emerging technology company.</h2>
            <h2 className = "creating-universal">Creating Universal Experiences</h2>
          {/* </Container> */}
        </div>
        
   {/* Secont Blurb -- */}

        <div className = "tool-section">
          {/* <Container> */}
         <Row>
          <Col>

   {/* Third Blurb */}
        <h2 className = "using-free">Using Free and Universal Tools</h2>
          </Col> 
          <Col> 
        <ul className = "tool-list">
          {/* <li>Blender 3D</li> someday..*/}
          <li>Unity 3D</li>
          <li>three.js</li>
          <li>React</li>
        </ul>
        </Col>
        </Row>
        {/* </Container> */} 
        </div>

{/* Fourth blurb */}
<div className = "plan-section">
  <h2 className = "creating-environments">
	Developing Environments to Explore</h2>
</div>

	{/* -----------------  What We Do  ------------- */}
	<div className = "what-we-do-section">
	<h1>What We Do</h1>
	<h2>3d Design</h2>
	<h2>Integration</h2>
	<h3>web</h3>
	<h3>App</h3>
	<h2>Metaverse Worlds</h2>
	<h1>Unity 3d</h1>
	</div>

	{/* ----------------- Projects ------------------ */}
	<div className = "projects-section">
	<h1 classname = "projects-title">Projects</h1>
        <h2>House in Unity</h2>
	<h2>Gif English Center</h2>
	</div>
        {/* -----------------  Biography    ------------ */}
        <div className = "biography-section">

        <Container> {/*Container for formatting */}
          <row> {/* Must add row */}
          {/* Biography Heading */}
          <h1 className='biography-title'>Biography</h1>
          </row>
          <Row> 
            <Col>
            {/* Thomas Biography */}
            <div className = "thomas-biography">
              {/* Name */}
              <h2 className = "thomas-biography-name">Thomas M. Stephens</h2>
                {/* Paragraphs */}

                <p className = "thomas-biography-paragraph"> 
                Thomas has been traveling the globe; 
                
                seeking spirituality and putting on 
                
                wold-class events.</p>

              <p className = "thomas-biography-paragraph">
                Ready to build a new world of technology 
                
                that is free from borders and boundaries.</p>

            <p className = "thomas-biography-paragraph">
              With a background in Music, live events, and computer programming; 

              he is ready to pay attention to the details that make 
              
              any experience believable, relatable, and polished.              
            </p>
            
            </div>
            </Col> 
            {/* End Thomas Biography */}

           {/* Start David Biography */}
            <Col>
            <div className = "david-biography">
              {/* Name */}
            <h2 className = "david-biography-name">David Martínez R.</h2>  
            {/* Paragraphs */}
            <p className = "david-biography-paragraph">
              David has been working as a designer in fields of web design, photography,
              3D modeling and animation.</p>

              <p className = "david-biography-paragraph">
                He is excited to step into the Virtual World to take the next step into 3DVR Design </p>
            
            <p className = "david-biography-paragraph">
              Creative, visionar, and artist. David has a passion for learning new technologies. </p>
            <p className = "david-biography-paragraph"></p>  
            </div>  {/* Close of david-biography */}
            </Col> 
            </Row>
        </Container>
        </div>

      </body>
      

    </div>
  );
}

export default App;