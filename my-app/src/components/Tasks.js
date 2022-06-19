import React, { useEffect } from "react";

function Tasks() {

    //needa know what page i'm on 
    useEffect(
        () => {
            console.log("This is the tasks page")
        }
    );

    console.log("Component rendering");
    
  

    return (
        <div>
            <p>I am tasks!</p>
            <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>

            <h3>Task Card</h3>
            <footer>Footer: Maybe instructions at the bottom or something</footer>
        </div>

    
    )
}

export default Tasks;