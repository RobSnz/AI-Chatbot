import React, { Component } from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'  
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProfilePicChanger from "./components/ProfilePicChanger";
import Pic1 from "./components/pics/pic1.svg";
import Pic2 from "./components/pics/pic2.svg";
import Pic3 from "./components/pics/pic3.svg";
import Pic4 from "./components/pics/pic4.svg";
import "./Profile.css";
import { FiEye } from "react-icons/fi";
import Navigation from '../Navbar';
import AuthService from '../Services/AuthService';

class ProfileTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            ProfileImage: ""
        }
    }
    
    componentDidMount() {
        this.getUserData();
    }

    getUserData() {
        AuthService.isAuthenticated().then(data => {
            this.setState({ userData: data.user });
            console.log(this.state.userData);
        })
    }
    handleImageChange = (ProfileImage) => {
        this.setState({
            ProfileImage
        })
    }

    render() {
        return (
            <>
            <div>
                <Navigation></Navigation>
                <section className="section">
                <div class='some-page-wrapper' >
                    <div class='row-profile'>
                        <div class='column-profile' style={{ marginLeft: "15%"}}>
                        <h1 className="title">My Profile</h1>
                    <h2 className="subtitle">Manage your Details.</h2>
                            <div class='blue-column'>                               
                                {/* Avatar */}
                                <div className="columns is-flex is-centered">
                                    <div className="column has-text-centered">
                                        <Avatar size={150} shape = "circle" icon={<UserOutlined />} style={{marginTop: "5%", justiftyContent:"center", alignItems:"center"}} src={this.state.ProfileImage} />
                                        <ProfilePicChanger handleImageChange={this.handleImageChange} Pic1={Pic1} Pic2={Pic2} Pic3 = {Pic3} Pic4 = {Pic4}/>
                                    </div>
                                </div>
                                <div className="columns is-multiline" style={{marginTop: "5%"}}>
                                    {/* Name */}
                                    <div className="column is-12">
                                        <h3 className="is-size-4 has-text-centered">{this.state.userData.username}</h3>
                                    </div>
                                    {/* Account Type */}
                                    <div className="column is-12">
                                        <div className="tags has-addons is-centered">
                                        </div>
                                    </div>

                                    <div className="column is-12">
                                        <h3 className="is-size-5 has-text-centered">
                                            <strong>Email: </strong>
                                            {this.state.userData.email}
                                            {/* email */}
                                        </h3>
                                    </div>
                                    {(
                                        <div className="column is-12">
                                            <h3 className="is-size-5 has-text-centered">
                                                <strong>Organisation: </strong>
                                                {/* Organisation */}
                                            </h3>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                        <div className='double-column' >
                            <div className='green-column'>                               
                                <div
                                    className="column is-two-thirds box is-fullwidth"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginRight: "45%"
                                    }}
                                >
                                    <div className="has-text-centered" style={{marginTop: "35%"}}>
                                        <FiEye size="4em" className="has-text-primary" />
                                        <p className="subtitle has-text-centered">Coming Soon</p>
                                        <p className="has-text-centered">
                                            Good things come to those who wait (or get early access{" "}
                                            <span role="img" aria-label="emoji">😉</span>)
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>                                                              
                    </div>
                </div>
                </section>
            </div>                      
            </>
        );
    }
}
export default ProfileTest;