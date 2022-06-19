import React, { useEffect } from "react";

function Home() {

    //needa know what page i'm on 
    useEffect(
        () => {
            console.log("This is the home page")
        }
    );

    console.log("Component rendering");
    return (
        <p>I am Home!</p>
    )
}

export default Home; 