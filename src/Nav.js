import React, { useEffect, useState } from 'react';
import './nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) { // Changed 'window.scroll' to 'window.scrollY'
                handleShow(true);
            } else {
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener('scroll', () => {}); // Added event type 'scroll'
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className='nav_logo'
                src='https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg'
                alt='Netflix logo'
            />
            <img
                className='nav_avatar'
                src='https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg'
                alt='Netflix logo'
            />
        </div>
    );
}

export default Nav;
