import "./style.css";
import React from 'react';
import {Link} from "react-router-dom";

const FrontPage = () => (
    <div id="particles-js">
        <div class="btext">
            <h1>Westbourne</h1>
            <p>AI Helpdesk</p> 
            <Link to='/chat' className="btn">Get Started</Link>
        </div>
        <script>
            particlesJS.load('particles-js', 'particles.json', null)
        </script>
    </div>

/* <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script> */

    // <script>
    //     particlesJS.load('particles-js', 'particles.json',
    //     function(){
    //         console.log('particles.json loaded...')
    //     })
    // </script>
)
// 
export default FrontPage;