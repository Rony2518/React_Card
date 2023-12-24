import React from "react"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export default function Contact(){
    return(
        <div className="social">
            <FaInstagram/>
            <CiFacebook/>
            <RiTwitterXFill/>
            <FaGithub/>
        </div>
    )
}