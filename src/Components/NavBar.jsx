import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"


// Internal styling
const buttonStyle = {
    backgroundColor : "blue",
    color : "white",
    padding : "10px 20px",
    borderRadius : "5px",
    border : "none",
    cursor : "pointer"

}

const NavBar = ()=>{
    return(
        <div >
           <nav className="" style={{display : "flex", alignItems : "center", justifyContent : "space-between", padding : "5px 50px", backgroundColor : "aliceblue"}} >
            <h1 className="text-primary">Logo</h1>
            <ul className="navigations">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>Contacts</li>
                <li>Services</li>
            </ul>
            <div style={{display : "flex", alignItems : "center", justifyContent : "space-between", gap: "20px"}}>
                <button style={buttonStyle}>Sign Up</button>
                <button style={buttonStyle}>Sign In</button>
            </div>
            </nav>  
        </div>
    )
}

export default NavBar