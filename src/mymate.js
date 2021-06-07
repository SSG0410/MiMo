import React, { useState } from 'react';
import logo from './images/logo.JPG';
import img1 from './images/mymate1.jpeg';
import img2 from './images/mymate2.jpeg';
import heart from './images/heart.png';
import comment from './images/comment.png';
import redlight from './images/redlight.png'
import './App.css';
import {Link} from 'react-router-dom';

export default function Mymate(){

    const [comment1, setNumber1] = useState(3);
    const [comment2, setNumber2] = useState(6);
    const [heart1, setNumber3] = useState(4);
    const [heart2, setNumber4] = useState(5);
    const [text, setText1] = useState('😁 Minsu "good!"');
    const [newcom, setText2] = useState('');
    const [text2, setText3] = useState('😙 Subin "👍👍👍');
    const [newcom2, setText4] = useState('');

    const comment1click = () =>{
        setNumber1(comment1 + 1);
        alert('A comment has been made!');
        setText1(newcom);
    }
    const comment2click = () =>{
        setNumber2(comment2 + 1);
        alert('A comment has been made!');
        setText3(newcom2);
    }
    const heart1click = () =>{
        setNumber3(heart1 + 1);
    }
    const heart2click = () =>{
        setNumber4(heart2 + 1);
    }
    const onChange = (e) =>{
        setText2('🥴 Hwayeon "'+e.target.value+'"');
    }
    const onChange2 = (e) =>{
        setText4('🥴 Hwayeon "'+e.target.value+'"');
    } 

    return(
        <body>
            <div className="div_home">
                <div className="temp-box">
                    <img src={logo} className="logo_home" alt="logo"/>
                    <div className="div_profile">
                    Hwayeon's MiMo<br></br>
                    <button className="button1_home">My Page</button>
                    <Link to="./">
                    <button className="button1_home">Log-out</button>
                    </Link>
                    </div>
                    <div>
                    <Link to ="./home">
                    <button className="button2_home">Home</button>
                    </Link>
                    <button className="button2_home">My MiMo</button>
                    <div className="menu_list">
                    <div>- My Calendar</div>
                    <div>- Add/Change</div>
                    <div>- Certification</div>
                    </div>
                    <button className="button2_home_select">My Mate</button>
                    </div>
                </div>
                <div className="temp-box">
                    <div className="mymate_title">:: My Mate ::</div>
                    <div className="mymate_specific">
                        (<img src={redlight} className="mymate_redlight" alt="redlight"/>
                        &nbsp; : currently connected)
                    </div>
                    <table className="mymate_table">
                        <tr height="10%" align="left">
                            <td width="20%" padding-left="10px">&nbsp;&nbsp;😀 Suji</td>
                            <td width="0.5%">
                                <img src={redlight} className="mymate_redlight" alt="redlight"/>
                            </td>
                            <td width="30%" rowspan="4" align="center">
                                <div className="mymate_content">
                                😉 Sumin (2021-06-04)
                                </div>
                                <img src={img1} className="home_image" alt="img1"/>
                                <div className="mymate_content2">
                                I studied this morning!
                                </div>
                            </td>
                            <td width="43%" rowspan="4">
                                <div className="mymate_commentbox">
                                😮 Soojeong "WOW~~~"<br></br><br></br>
                                {text}
                                </div>
                                <div className="mymate_commentbox2">
                                    <img src={comment} className="home_heart" alt="comment"/>  &nbsp;{comment1}
                                </div>
                                <div className="mymate_commentbox3">
                                    <button onClick={heart1click} className="heartbutton">
                                    <img src={heart} className="home_heart" alt="heart"/> 
                                    </button>
                                    {heart1} &nbsp; &nbsp;
                                    <input type="text" className="mymate_comment" onChange={onChange}></input> &nbsp; &nbsp;
                                    <button onClick={comment1click} className="button_mymate">Send</button>
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
                        <tr align="left">
                            <td>&nbsp;&nbsp;🥰 Saeyeon</td>
                            <td></td>
                        </tr>
                        <tr align="left">
                            <td>&nbsp;&nbsp;😯 Sujyeong</td>
                            <td></td>
                            <td rowspan="4" align="center">
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
                                    😦 Mina "what's your plan?"<br></br><br></br>
                                    {text2}
                                </div>
                                <div className="mymate_commentbox2" align="center">
                                <img src={comment} className="home_heart" alt="comment"/>&nbsp; {comment2}
                                    
                                </div>
                                <div className="mymate_commentbox3">
                                    <button onClick={heart2click} className="heartbutton">
                                    <img src={heart} className="home_heart" alt="heart"/> 
                                    </button>
                                    {heart2} &nbsp; &nbsp;
                                    <input type="text" className="mymate_comment" onChange={onChange2}></input> &nbsp; &nbsp;
                                    <button onClick={comment2click} className="button_mymate">Send</button>
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
