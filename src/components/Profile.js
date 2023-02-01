import React from "react";
import LoginEmailState from "../recoil/LoginEmailState";
import LoginState from "../recoil/LoginState";
import { UserOutlined, DesktopOutlined, EuroOutlined, EditOutlined, MinusSquareOutlined, QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons'
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import '../App.css'


const Profile = () => {
    const [loginEmail, SetLoginEmail] = useRecoilState(LoginEmailState);
    const [login, SetLogin] = useRecoilState(LoginState);
    const navigate = useNavigate();

    // rename it to handleSignOut
    const handleSignOut = () => {
        SetLogin(false);
        SetLoginEmail('');
        navigate('/');
    }
    return (
        <div className="Profile">
            <div className="Account">
                <div className="Title">MY ACCOUNT</div>
                <div className="ElementsInAccount">
                    <button><UserOutlined /> My Profile</button>
                    <button><DesktopOutlined /> Manage Subscription</button>
                    <button><EuroOutlined /> Redeem Coupons</button>
                    <button><EditOutlined /> My Coupons</button>
                    <button><MinusSquareOutlined /> Payment History</button>
                    <button><QuestionCircleOutlined /> Get Support</button>
                    <button onClick={handleSignOut}><LogoutOutlined /> Sign Out</button>
                </div>
            </div>
            <div className="MyProfile">
                <div className="Title">MY PROFILE</div>
                <div className="ElementsInProfile">
                    Email address<br />
                    <div className="EmailInProfile">
                        {loginEmail}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;