import React from "react";
import Image from 'next/image';
import team from "./team.png";
import './about.css';
import Link from "next/link";

export const AboutUs = () => {
    return (
<React.Fragment>
    <div>
        <h2><Link href="#">HOME</Link> {">"} About us</h2>
    </div>
    <div><h1>About us</h1></div>
    <div className="card">
        <Image src={team} alt="team photo" />
    </div>
    <div className="text">
        <p>Hi, everyone! Our names is John, Bibha, Brian, Valeriya and Renjani. We are a team of students of the web development school 
        “Hack Your Future”.</p>
        <br></br>
        <p>We created this project because each of us is a connoisseur of home cooking, but does not always have opportunity to create 
        complex dishes from a variety of ingredients. We decided that a convenient and beautiful website where you can find a recipe by ingredient,
        nutrition features, ease of execution and other criteria will be a good helper in cooking.</p>
        <br></br>
        <p>We hope you will like it too. If so, you can join our team, create a personal account, add your own recipes, ratings and comments.</p>
        <br></br>
        <p>Welcome to the “What can I cook?” site. We are glad to see you!</p>
    </div>
</React.Fragment>
    );
};

export default AboutUs;