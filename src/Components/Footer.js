import React from "react";


const CurrentDate = new Date();
const Year = CurrentDate.getFullYear();

const Footer = ()=> (

    <footer>
    <p>Copyright @{Year}</p>
    </footer>
);


export default Footer;