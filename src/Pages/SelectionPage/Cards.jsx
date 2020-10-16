import React, { Component } from 'react';
import Card from "./CardUI";
import SelectMale from "../../assets/SelectionMale.svg";
import SelectFemale from "../../assets/SelectionFemale.svg";

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6">
                        <Card imgsrc={ SelectMale } title="Alex" link='/Chatbot' btntitle="Talk to Alex" />
                    </div>
                    <div className="col-md-6">
                        <Card imgsrc={ SelectFemale } title="Cassy" link='/Chatbot' btntitle="Talk to Cassy"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;