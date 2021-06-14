import React from 'react'
import './Header.css'
// import App from "../App.js"
// import {useState} from 'react';
import AddTodo from './AddTodo';

class Header extends React.Component{
 

    render() {
        return (
                <div className="box">
                    <svg className="check_svg" viewBox="0 -46 417.81333 417" width="417pt" xmlns="http://www.w3.org/2000/svg"><path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" fill="#2196f3"/></svg>
                    <header className="header_container">
                        <h1 className="heading">To-do List</h1>
                    </header>
                </div>
        )
    }
}

export default Header;