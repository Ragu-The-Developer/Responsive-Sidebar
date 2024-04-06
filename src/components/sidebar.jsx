import React, { useState } from 'react'
import { FaAddressCard, FaAngleDoubleUp, FaBars, FaTh } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { RiGalleryLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import Logo  from '../components/logo.png';
export default function Sidebar({children}) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

        const menuItems = [
            {
                path: "/",
                name: "Home Page",
                icon: <FaTh></FaTh>,
            },
            {
                path: "/about",
                name: "About Page",
                icon: <FaAddressCard/>,
            },
            {
                path: "/portfolio",
                name: "Portfolio Page",
                icon: <FaAngleDoubleUp/>,
            },
            {
                path: "/gallery",
                name: "Gallery Page",
                icon: <RiGalleryLine />,
            },
            {
                path: "/contact",
                name: "Contact Page",
                icon: <IoIosContact />
            },
        ]
return (
    <div className='container'>
        <div style = {{width: isOpen ? "300px" : "50px"}} className='sidebar'>
            <div className='top-section'>
                <h1 style = {{display: isOpen ? "block" : "none"}}className='logo'><img src={ Logo }
                 width={100} height={100} /></h1>
                <div style = {{marginLeft: isOpen ? "50px" : "0px"}} className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItems.map((item, index) => (
                 <NavLink to={item.path} key={index} className = "link" activeclassName = "active">
                    <div className='icon'>{item.icon}</div>
                    <div style = {{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                 </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
)
        }  

