import React from 'react';
import logo from './images/logo.JPG';
import img1 from './images/mymate1.jpeg';
import img2 from './images/mymate2.jpeg';
import heart from './images/heart.png';
import comment from './images/comment.png';
import redlight from './images/redlight.png'
import './App.css';
import {Link} from 'react-router-dom';

export default function mymate() {
    return(
        <body>
            <div className="div_home">
                <div className="temp-box">
                    <img src={logo} className="logo_home" alt="logo"/>
                    <div className="div_profile">
                    Hwayeon's MiMo<br></br>
                    <button className="button1_home">My Page</button>
                    <button className="button1_home">Log-out</button>
                    </div>
                    <div>
                    <Link to ="./home">
                    <button className="button2_home">Home</button>
                    </Link>
                    <button className="button2_home">My Calendar</button>
                    <div className="menu_list">
                        ㄴ Add/Change<br></br> ㄴ Certification<br></br>
                    </div>
                    <button className="button2_home_select">My Mate</button>
                    </div>
                </div>
                <div className="temp-box">
                    <div className="home_title">:: My Mate ::</div>
                    <table className="mymate_table">
                        <tr height="10%" align="left">
                            <td width="20%" padding-left="10px">&nbsp;&nbsp;😀 Suji</td>
                            <td width="0.5%">
                                <img src={redlight} className="mymate_redlight" alt="redlight"/>
                            </td>
                            <td width="30%" rowspan="4" align="center">
                                <div className="mymate_content">
                                😉 Sumin    
                                </div>
                                <img src={img1} className="home_image" alt="img1"/>
                                <div className="mymate_content2">
                                I studied this morning!
                                </div>
                            </td>
                            <td width="43%" rowspan="4">
                                <div className="mymate_commentbox">
                                😮 Soojeong "WOW~~~"<br></br><br></br>
                                😁 Minsu "good!"
                                </div>
                                <div className="mymate_commentbox2">
                                    <img src={comment} className="home_heart" alt="comment"/>  &nbsp;4
                                </div>
                                <div className="mymate_commentbox3">
                                    <img src={heart} className="home_heart" alt="heart"/> 6 &nbsp; &nbsp;
                                    <input type="text" className="mymate_comment"></input> &nbsp; &nbsp;
                                    <button className="button_mymate">Send</button>
                                </div>
                            </td>
                        </tr>
                        <tr align="left">
                            <td>&nbsp;&nbsp;😉 Sumin</td>
                            <td><img src={redlight} className="mymate_redlight" alt="redlight"/></td>
                        </tr>
                        <tr align="left">
                            <td>&nbsp;&nbsp;😎 Sugyeong</td>
                            <td><img src={redlight} className="mymate_redlight" alt="redlight"/></td>
                        </tr>
                        <tr><td colspan="2">-</td></tr>
                        <tr>
                            <td colspan="2">-</td>
                            <td rowspan="4">
                                <div className="mymate_content">
                                😎 Sugyeong (2021-06-04)
                                </div>
                                <img src={img2} className="home_image" alt="img2"/>
                                <div className="mymate_content2">
                                Write today's schedule
                                </div>
                            </td>
                            <td rowspan="4">
                                <div className="mymate_commentbox">
                                    😮 Mina "what's your plan?"<br></br><br></br>
                                    😮 Subin "👍👍👍"
                                </div>
                                <div className="mymate_commentbox2" align="center">
                                    <img src={comment} className="home_heart" alt="comment"/>  &nbsp;6
                                </div>
                                <div className="mymate_commentbox3">
                                    <img src={heart} className="home_heart" alt="heart"/> 15 &nbsp; &nbsp;
                                    <input type="text" className="mymate_comment"></input> &nbsp; &nbsp;
                                    <button className="button_mymate">Send</button>
                                </div>
                            </td>
                        </tr>
                        <tr><td colspan="2">-</td></tr>
                        <tr><td colspan="2">-</td></tr>
                        <tr><td colspan="2">-</td></tr>
                    </table>
                </div>
            </div>
        </body>
    );
}
