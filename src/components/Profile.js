import React from "react";
import { UserOutlined } from '@ant-design/icons'
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import LoginEmailState from "../recoil/LoginEmailState";
import LoginState from "../recoil/LoginState";
import '../App.css'


export default function Profile() {
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
                    <button>Manage Subscription</button>
                    <button>Redeem Coupons</button>
                    <button>My Coupons</button>
                    <button>Payment History</button>
                    <button>Get Support</button>
                    <button onClick={handleSignOut}>Sign Out</button>
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
