import React from "react";
import img from '../images/cricbuzzlogo.svg';
import { Link } from "react-router-dom";
import {GlobalOutlined,AndroidFilled,AppleFilled,FacebookFilled,TwitterOutlined,FilePptFilled,YoutubeFilled} from '@ant-design/icons';
export default function Footer() {
   return (<div>
      <div className="Footer">
      <div className="CricBuzzLogo">
         <Link to='/'><img src={img} alt='is loading' /></Link>
      </div>
      <div className="MobileSite">
         <b>MOBILE SITE & APPS</b>
         
            <ul>
               <li><a className="FooterLink" href="https://m.cricbuzz.com/"><GlobalOutlined /> m.cricbuzz.com</a></li>
               <li><a className="FooterLink" href="https://play.google.com/store/apps/details?id=com.cricbuzz.android"><AndroidFilled />  Android</a></li>
               <li><a className="FooterLink" href="https://apps.apple.com/app/id360466413"><AppleFilled /> iOS</a></li>

            </ul>
         
      </div>
      <div className="FollowUs">
         <b>FOLLOW US ON</b>
        
            <ul>
               <li><a className="FooterLink" href="https://www.facebook.com/cricbuzz"><FacebookFilled /> facebook</a> </li>
               <li><a className="FooterLink" href="https://twitter.com/cricbuzz"><TwitterOutlined /> twitter</a></li>
               <li><a className="FooterLink" href="https://www.youtube.com/channel/UCSRQXk5yErn4e14vN76upOw"><YoutubeFilled /> youtube</a></li>
               <li><a className="FooterLink" href="https://in.pinterest.com/cricbuzz/"><FilePptFilled /> Pinterest</a></li>
            </ul>
         
      </div>
      <div className="Company">
         <b>COMPANY</b>
        
            <ul>
               <li><Link className="FooterLink" >Careers</Link></li>
               <li><Link className="FooterLink" >Advertise</Link></li>
               <li><Link className="FooterLink" >Private Policy</Link></li>
               <li><Link className="FooterLink" >Terms of Use</Link></li>
               <li><Link className="FooterLink" >Cricbuzz TV Ads</Link></li>
            </ul>
        
      </div>
      
   </div>
   <div className="FooterText">© 2023 Cricbuzz.com, Times Internet Limited. All rights reserved | The Times of India Navbharat Times</div>
   </div>);
}
