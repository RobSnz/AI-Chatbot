import React from 'react';
import "./card-style.css";
import {Link} from "react-router-dom";

const Card = props => {

    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt=" Selection Male" className = "card-img-top"/>
            </div>

            <div className="card-body text-dark">
                <h4 className="card-title"> {props.title}</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aut quibusdam debitis, deserunt molestiae autem nulla ipsum deleniti quasi modi.
                </p>
                <Link to= {props.link} className="btn btn-outline-dark ">{props.btntitle}</Link>
            </div>

        </div>

    );
}

export default Card;