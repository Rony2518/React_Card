import React from "react"
import person from "../images/hetvi.jpg"
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Intro(){
    return(
        <div className="contain">
            <img src={person} alt="hello" />
            <h2>Hetvi Vashi</h2>
            <h4>Graphic Designer</h4>
            <h6>Frontend Manager</h6>
            <div className="contact">
                <div className="email"> <MdOutlineEmail/> Email</div>
                <div className="linkdein"> <FaLinkedin/> Linkdien</div>
            </div>
        </div>
    )
}