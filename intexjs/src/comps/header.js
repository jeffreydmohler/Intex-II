import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import world from "../media/world.svg"

// import AppContext from './context'


function Header(props) {
    // const context = React.useContext(AppContext)

    return (
        <bs.Navbar expand="lg" variant="light" bg="secondary">
            <Link to="/">
                <bs.Navbar.Brand>
                    <img alt="charitable" src={world} width="50" />
                    ChariTable
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                    <Link to="/search" className="nav-link">Search Campaigns &nbsp; |</Link>
                    <Link to="/create" className="nav-link">Success Predictor &nbsp; |</Link> 
                    <Link to="/fraud-detection" className="nav-link">Fraud Detection</Link>
                </bs.Nav>
                <bs.Nav>
                    <bs.Nav className="mr-auto pr-4">
                        <Link to="/cart" className="nav-link">
                        </Link>
                    </bs.Nav>
                    <bs.NavDropdown title="Welcome, User" alignRight>
                        <bs.NavDropdown.Item>My Account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item href="#action/3.4">Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}
export default Header