import './App.css';
import { Component } from 'react';
import Cl from './Apna-app/Cl';
import Contenar from './component/Contenar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shopping from './Apna-app/Shopping'
import Home from './Apna-app/Home';
import Contact from './Apna-app/Contact';
import Counter from './Counter';
import TemperatureConverter from './TemperatureConverter';


 export default class App extends Component{
render(){
  return(
    <div>
      <Cl/>
      {/* <TemperatureConverter/> */}
      <div>
      <Routes>
         <Route path='' element={<Home/>}/>
        <Route path='/Shopping' element={<Shopping/>}/>
        <Route path='/Contact' element={<Counter/>}/>
        
      </Routes>
    </div>
  </div>
  )
}






 }













