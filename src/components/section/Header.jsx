import React, { useState } from 'react'
import { headerNav } from '../../data/header'
import { Link, useLocation } from 'react-router-dom'


const Header = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href='/'>
                        <em aria-hidden='true'></em>
                        <span>MPPP<br />Game</span>
                    </a>
                </div>
                <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul className='menu'>
                        {headerNav.map((menu, key) => (
                            <li key={key} className={location.pathname === menu.url ? 'active' : ''}>
                                <Link to={menu.url}>
                                    {menu.icon}{menu.title}
                                </Link>
                            </li>
                        ))}
                        {/* {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))} */}

                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={show ? "true" : "false"}
                    role="button"
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header >
    );
}

export default Header;

// {
//     const arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
//     // 100 200 300 400 500 600 700 800 900
// }   

// {
//     const arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];
//     arr.map((element) => {
//         console.log(element);
//     });

//     // [100, 200, 300, 400, 500, 600, 700, 800, 900];
// }   
                          
// {
//     const arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];
//     arr.map((element, index) => {   
//         console.log(index);
//     });
//     arr.map((element, index, array) => {
//         console.log(array);
//     });

//     // [100, 200, 300, 400, 500, 600, 700, 800, 900] * 9
// }