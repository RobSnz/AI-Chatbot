import React from 'react';
import ReactAnime from 'react-animejs';

const Animation = () => {
    const { Anime } = ReactAnime;
    return(
        <Anime
            initial={[{
                targets: "#Box",
                translateX: 50,
                easing: "linear",
                loop: true,
                duration: ReactAnime.stagger(400),
                delay: 1000,
                direction: "alternate",
            }]}
        >
        <ul>
            <li id="Box" style={{ height: 25, width: 25, background: "#61658B", listStyleType: "none", borderRadius: "20px", marginTop: "0px" }} />
            <li id="Box" style={{ height: 25, width: 25, background: "#61658B", listStyleType: "none", borderRadius: "20px", marginTop: "-25px", marginLeft: "200px" }} />
            <li id="Box" style={{ height: 25, width: 25, background: "#61658B", listStyleType: "none", borderRadius: "20px", marginTop: "-25px", marginLeft: "170px" }} />
            <li id="Box" style={{ height: 25, width: 25, background: "#61658B", listStyleType: "none", borderRadius: "20px", marginTop: "-25px", marginLeft: "140px"  }} />
            <li id="Box" style={{ height: 25, width: 25, background: "#61658B", listStyleType: "none", borderRadius: "20px", marginTop: "-25px", marginLeft: "110px" }} />
            <li id="Box" style={{ height: 25, width: 25, background: "#61658B", listStyleType: "none", borderRadius: "20px", marginTop: "-25px", marginLeft: "80px" }} />
        </ul>
        </Anime>
    )
}

export default Animation;