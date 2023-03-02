
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DropDown from './Components/DropDown';
import Home from './Components/Home';
import ImageSlider from './Components/ImageSlider';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import { SliderData } from './Components/SliderData';
import Baby from './Services/Baby';
import Covid from './Services/Covid';
import HealthDevices from './Services/HealthDevices';
import HealthNutrition from './Services/HealthNutrition';
import Protein from './Services/Protein';
import Super from './Services/Super';
import Woman from './Services/Woman';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/covid' element={<Covid/>} />
        <Route path='/baby' element={<Baby/>}/>
        <Route path='/super' element={<Super/>}/>
        <Route path='/protein' element={<Protein/>}/>
        <Route path='/woman' element={<Woman/>}/>
        <Route path='/health-nutrition' element={<HealthNutrition/>}/>
        <Route path='/health-devices' element={<HealthDevices/>}/>
      </Routes>
    </div>
  );
}

export default App;
