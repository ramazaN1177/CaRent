import React, { Component } from 'react'
import { Link } from 'react-router-dom';



import {
  Navbar,

  Nav,




} from 'reactstrap';





export default class Navi extends Component {



  render() {
    return (
      <div>
        <Navbar className="my-2" style={
          {
            backgroundColor: "gray",
            borderColor: "#FF1493"
          }} dark>
            <Link to = "/dashboard">
                   CARENT
            </Link>
          <Nav >


              <Link to="/carpage">My Cars</Link>





          </Nav>

        </Navbar>
      </div>
    );
  }
}