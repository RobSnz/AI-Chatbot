import React, { Component } from 'react';
import Card from "./CardUI";
import SelectMale from "../assets/SelectionMale.PNG";
import SelectFemale from "../assets/SelectionFemale.PNG";

class Cards extends Component {

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6">
                        <Card imgsrc={SelectMale} title = "Alex" link = '/chat' btntitle = "Talk to Alex" />
                    </div>

                    <div className="col-md-6">
                        <Card imgsrc={SelectFemale} title = "Cassy" link = '/chat-female' btntitle = "Talk to Cassy"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;