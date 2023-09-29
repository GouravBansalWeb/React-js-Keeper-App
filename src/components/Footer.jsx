import React from "react";

function Footer(Props) {
    const currentyear = new Date().getFullYear();
    return(
        
        <footer>
        <h1> Copyright &copy; {currentyear}</h1>
        </footer>
    )

}
export default Footer;