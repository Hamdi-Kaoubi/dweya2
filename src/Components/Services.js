import React from 'react'
import image1 from '../Assets/covid19.jpg'
import image2 from '../Assets/baby.jpg'
import image3 from '../Assets/superfood.jpg'
import image4 from '../Assets/protein.png'
import image5 from '../Assets/woman.jpg'
import image6 from '../Assets/healthNutrition.jpg'
import image7 from '../Assets/healthDevices.jpg'
import './css/Services.css'
import { Link, useNavigate } from 'react-router-dom'
const Services = () => {
    const navigate=useNavigate()
  return (
    <div className='services'>
        <h1>Always here for you</h1>
        <p>with all the health essentials you need for you and your family</p>
        <div className='container'>
            <div className='item'>
                <Link to='/covid'><img src={image1} alt=''/></Link>
                <p>Covid essentials</p>
            </div>
            <div className='item'>
                <img src={image2} alt='' onClick={()=>navigate('/baby')}/>
                <p>Baby care</p>
            </div>
            <div className='item'>
                <img src={image3} alt='' onClick={()=>navigate('/super')}/>
                <p>Super food</p>
            </div>
            <div className='item'>
                <img src={image4} alt='' onClick={()=>navigate('/protein')}/>
                <p>Protein products</p>
            </div>
            <div className='item'>
                <img src={image5} alt='' onClick={()=>navigate('/woman')}/>
                <p>Woman care</p>
            </div>
            <div className='item'>
                <img src={image6} alt='' onClick={()=>navigate('/health-nutrition')}/>
                <p>Health and nutrition</p>
            </div>
            <div className='item'>
                <img src={image7} alt='' onClick={()=>navigate('/health-devices')}/>
                <p>Health devices-Aide</p>
            </div>
        </div>
    </div>
)
}

export default Services