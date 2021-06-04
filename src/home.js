import React from 'react';
import logo from './images/logo.JPG';
import img1 from './images/home1.jpg';
import img2 from './images/home2.jpg';
import img3 from './images/home3.jpeg';
import img4 from './images/home4.jpeg';
import img5 from './images/home5.jpeg';
import img6 from './images/home6.jpeg';
import heart from './images/heart.png';
import comment from './images/comment.png';
import './App.css';
import {Link} from 'react-router-dom';

export default function home() {
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
                    <button className="button2_home_select">Home</button>
                    <button className="button2_home">My Calendar</button>
                    <div className="menu_list">
                        ㄴ Add/Change<br></br> ㄴ Certification<br></br>
                    </div>
                    <Link to="./mymate">
                    <button className="button2_home">My Mate</button>
                    </Link>
                    </div>
                </div>
                <div className="temp-box">
                    <div className="home_title">:: Today's MiMo ::</div>
                    <table className="home_table">
                        <tr>
                            <td colspan="2">
                                <img src={img1} className="home_image" alt="img1"/>
                            </td>
                            <td colspan="2">
                                <img src={img2} className="home_image" alt="img2"/>
                            </td>
                            <td colspan="2">
                                <img src={img3} className="home_image" alt="img3"/>
                            </td>
                        </tr>
                        <tr align="center" valign="top" height="100px">
                            <td width="13%">
                            @Gayeon
                            </td>
                            <td width="20%">
                            <img src={heart} className="home_heart" alt="heart"/> 24 &nbsp;
                            <img src={comment} className="home_heart" alt="comment"/> 6
                            </td>
                            <td width="13">
                            @Minho
                            </td>
                            <td width="20%">
                            <img src={heart} className="home_heart" alt="heart"/> 12 &nbsp;
                            <img src={comment} className="home_heart" alt="comment"/> 3
                            </td>
                            <td width="13%">
                            @Yeji
                            </td>
                            <td width="20%">
                            <img src={heart} className="home_heart" alt="heart"/> 3 &nbsp;
                            <img src={comment} className="home_heart" alt="comment"/> 4
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <img src={img4} className="home_image" alt="img4"/>
                            </td>
                            <td colspan="2">
                                <img src={img5} className="home_image" alt="img5"/>
                            </td>
                            <td colspan="2">
                                <img src={img6} className="home_image" alt="img6"/>
                            </td>
                        </tr>
                        <tr align="center" valign="top" height="100px">
                            <td width="13%">
                            @Saeyeon
                            </td>
                            <td width="20%">
                            <img src={heart} className="home_heart" alt="heart"/> 15 &nbsp;
                            <img src={comment} className="home_heart" alt="comment"/> 4
                            </td>
                            <td width="13%">
                            @Soojyeong
                            </td>
                            <td width="20%">
                            <img src={heart} className="home_heart" alt="heart"/> 21 &nbsp;
                            <img src={comment} className="home_heart" alt="comment"/> 3
                            </td>
                            <td width="13%">
                            @Suzy
                            </td>
                            <td width="20%">
                            <img src={heart} className="home_heart" alt="heart"/> 14 &nbsp;
                            <img src={comment} className="home_heart" alt="comment"/> 2
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        </body>
        
    );
}