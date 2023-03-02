import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import './css/down.css';

const DropDown = () => {
  return (
    <div className='drop'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Dropdown style={{ color: 'black' }}>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Shop
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '14px', width: '100px', height: '40px',outline: 'none' }}>Offers</button>
      </div>
    </div>
  )
}

export default DropDown;
