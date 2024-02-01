import React from "react"
import Image from "/src/assets/kierunsplash.jpg";


export default function Header() {
    return ( 
    <div className="header">
        <img src={ Image } alt="" />
        <h2>
            Christine Deneschuk
        </h2>
        <h3 className="fullstack">
            Full Stack Developer
        </h3>
        <p>https://genuine-licorice-99a32a.netlify.app/</p>

        </div>
    )
}

