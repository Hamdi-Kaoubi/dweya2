import React from 'react';
import './css/Nav.css';
import img from '../Assets/Dweya-removebg-preview.png';
import {IoMdLogIn} from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import {GrBasket} from 'react-icons/gr';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="nav">
    
      <ul>
        <li>
        <img 
        src={img}
         alt="404" 
         style={{ width: '210px',
          height: '180px' ,
          bottom:'99%',
          marginTop:'-55px',
          marginLeft:'-20px',
          }}
        />
        </li>
        <div className="search-container">
          <li>
            <input type="text" placeholder="search" className="search-input" />
            <FiSearch className='searchi'/>
          </li>
        </div>
        <li>
        
        </li>

        <li>
          <RiAccountPinCircleLine style={{height:"35px",width:"35px"}}/>
          <a href="">Account</a>
        </li>
        <li>
         <GrBasket style={{height:"30px",width:"30px"}}/>
          <a href="">Basket</a>
        </li>
        <li>
        <IoMdLogIn style={{height:"30px",width:"30px"}}/>
        <a href=''>Log in</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
