import React, { Component } from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'  
import { Modal, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import "../Profile.css";
import { FiEdit, FiEye } from "react-icons/fi";

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
                    <Button className="column button is-primary btn-outline-dark is-fullwidth" 
                    type="button" onClick={this.showModal} 
                    style={{ marginTop: "2%", justiftyContent:"center", alignItems:"center", width : 150 ,height : 50}}>
                    <span className="icon"> 
                    <EditOutlined />
                    </span>
                    <span>Edit</span>
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