import unityhousevideo from './videos/UnityHouse.mp4'
import logo from './3DVR.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Navbar, Nav
} from 'react-bootstrap'

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
            <h2 className = "we-are-a">We are an emerging technology company</h2>
            <h2 className = "creating-universal">Creating Universal Experiences</h2>
          {/* </Container> */}
        </div>
        
   {/* Secont Blurb -- */}

        <div className = "tool-section">


          {/* <Container> */}
         <Row>
          <Col>

        <h2 className = "using-free">Using the latest Tools</h2>
          </Col> 
          <Col> 
        <ul className = "tool-list">
          {/* <li>Blender 3D</li> someday..*/}
          <li>Unity</li>
          <li>three.js</li>
          <li>React</li>
        </ul>
        </Col>
        </Row>
        {/* </Container> */} 
        </div>


   {/* Third Blurb */}
<div className = "plan-section">
  <h2 className = "creating-environments">
	Developing Environments to Explore</h2>
</div>

	{/* -----------------  What We Do  ------------- */}
	<div className = "what-we-do-section">
<div class="container">
<div class='row'>
<h1 className = 'what-we-do-title'>What We Do</h1> 
  </div>
 <div class='row'> 
 <div className="col-md what-we-do-column-formatting">
	<h2>3d Design</h2>
	
	<p><em>Dream up virtual objects.</em></p>

    <h4><a href="https://www.maxon.net/en/cinema-4d" className="plain-link" target="_blank" rel="noreferrer"> Cinema 4d</a></h4>
    <h4><a href="https://www.blender.org/about/" className="plain-link" target = "_blank" rel="noreferrer">Blender</a></h4>
    <h4><a href="https://www.gravitysketch.com/" className="plain-link" target="_blank" rel="noreferrer">Gravity Sketch</a></h4>
    </div>

  <div class = 'col-md what-we-do-column-formatting'>
	<h2>Web App Integration</h2>
	
	{/* <p>We've done the reasearch to make sure your app runs smoothly  */}
	  {/* across all devices.</p>  */}
	
	<p><em>Showcase experiences
    using the power of the web 
    </em></p> 
	
	<h4><a href="https://threejs.org/examples/#webgl_animation_keyframes" className="plain-link"  rel="noreferrer" target="_blank"> three.js</a></h4>

	<h4><a href="https://aframe.io/" className="plain-link" target="_blank" rel="noreferrer">A-frame</a></h4>
	
	<h4><a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" className="plain-link" targer="_blank" rel="noreferrer" > React Three Fiber</a></h4>

	{/* <p>React three fiber is a library that lets us create a hybrid app that  */}
	{/* includes 2d and 3d interactive components</p> */}

	{/* <h4>Flutter</h4> */}
	{/* <p>Cross-Platform app creation</p> */}
  </div>
  
  <div class = 'col-md what-we-do-column-formatting'>
	<h2>Metaverse Worlds</h2>
  <p><em>Create realistic immersive environments.</em></p>
	<h4>Unity 3d</h4>
  <h4>Alspace Worlds</h4>
  <h4>Rec Room</h4>
	</div>
  </div>  
  </div>
</div>

	{/* ----------------- Projects ------------------ */}
	<div className = "projects-section">
    <div class = 'container'>





<video preload="none" autoplay="autoplay" id="video"  muted playsinline loop>
  <source src={unityhousevideo} type="video/mp4"/>
    
  Your Broser DOes not support
</video>

     <div className="invisible" > 
     
     {/* {(() => {

     document.querySelector('video').playbackRate = .1
    })()} */}

    {/* <>
    {(() => {
      
      let options = {
        root: null,
      rootMargin:'0px',
      threshold:1.0
    };
    
    let callback = (entries, observer)=>{
      entries.forEach(entry => {
        if(entry.target.id == 'video')
        {
          if (entry.isIntersecting){
             entry.target.play();
            }
            else{
              entry.target.pause();
            }
          }
          
        })};
        
        let observer = IntersectionObserver(callback, options);
        observer.observe(document.querySelector('#video'));
        
      })()}
      </> */}
    
    
      
     </div>

      <div class = 'row'>
	<h1 className = "z-index" >Projects</h1>
        <div class = 'col' className="z-index"><h2> House in Unity</h2>
        <p>This is a House we made for Alspace using Unity3D 
          and AlspaceVR.
        </p>
        </div>

	<div class = 'col' className="z-index"><h2>Gif English Center</h2>
  <p>Gif English Center is a remarkable place in guatemala
    where people of all ages can learn english. </p></div>
  </div>
  </div>
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
