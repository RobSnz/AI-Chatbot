import React, { Component } from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'  
import { Modal, Button } from 'antd';

class ProfilePicChanger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            imagesArray : [props.Pic1, props.Pic2, props.Pic3, props.Pic4]
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        const imageMapper = this.state.imagesArray.map((image, index) => {
            return (
                <img src = {image}
                onClick = { () => this.props.handleImageChange(image)}
                alt="Profile Avatar"
                height = "78px"
                />
            )
        })
        return (
            <div className="ProfilePicChanger">
                <>
                    <Button className="btn btn-outline-dark" type="button" onClick={this.showModal} style={{  width : 80 , left: 30}}>
                         Edit
                    </Button>
                    <Modal
                        title="Choose your Icon"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                    {imageMapper}
                    </Modal>
                </>
            </div>

        );
    }
}
export default ProfilePicChanger;