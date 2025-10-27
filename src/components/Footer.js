import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
     

  return (
  <div className='d-flex justify-content-around align-items-center' style={{backgroundColor:"skyblue"}}>
     <h1 style={{ color:"White"}}>The Genrerics</h1>
   <Nav className="justify-content-center mb-3">
    <Nav.Link href="https://www.youtube.com/" target="_blank">
  <i className="bi bi-youtube" style={{ fontSize: "2rem",fill:"white", color: "red" }}></i>
</Nav.Link>
     <Nav.Link href='https://open.spotify.com/' target='_blank'><i className="bi bi-spotify" style={{fontSize:"2rem", color:"white"}}></i></Nav.Link> 
      <Nav.Link href='https://www.facebook.com/' target='_blank'><i className="bi bi-facebook" style={{fontSize:"2rem", color:"white"}}></i></Nav.Link> 
   </Nav>
  </div>
  )
}

export default Footer
