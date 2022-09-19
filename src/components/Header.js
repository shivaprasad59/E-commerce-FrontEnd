
import React from 'react';
import ImageOne from '../images/project_2.png'
import ImageTwo from '../images/end_part.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
// import SearchIcon from '@mui/icons-material/Search';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import '../css/header.css';



function Header(){
    return(
        <>
        <div className='header'>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src = {ImageOne} className='header_logo'></img>
                
                <div className="header_option">
                    <FontAwesomeIcon icon={faLocationDot} className="header_loc"/>
                </div>
                &nbsp;&nbsp;
                <div className="header_option_loc">
                        <span className="header_optionone"> Hello </span>
                        <span className="header_optiontwo"> Location </span>
                </div>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                
            <div className="header_search">
                <input type="text" className="header_search_in" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="header_searchIcon"/>
            </div>

            <div className='header_nav'>

                <div className='header_option'>
                        <span className='header_optionone'> Hello</span>
                        <span className='header_optiontwo'> Sign In </span>
                </div>
                <div className="header_option">
                        <span className="header_optionone"> Return </span>
                        <span className="header_optiontwo"> & Orders </span>
                </div>
                <div className="header_option">
                        <span className="header_optionone"> Your </span>
                        <span className="header_optiontwo"> Prime </span>
                </div>
                <div className="header_optionBasket">
                    
                        <span className="header_optiontwo">(1)<FontAwesomeIcon className='header_CartIcon' icon={faCartShopping} />&nbsp; Cart</span>
                             
                </div>

            </div>

        </div>

        <div className="header_bottom d-flex">
            <ul>
                <li> All</li>
                <li> Categories</li>
                <li> Electronics</li>
                <li> Fashion</li>
                <li> Furniture</li>
                <li> Accessories</li>
                <li> Decoratives</li>
                <li> Popular</li>
                <li> Trends</li>
                
            </ul>
            <ul id="photo">
                <li>
                    <img src={ImageTwo} ></img>
                </li>
            </ul>
        </div>


        </>
    );
}
export default Header;