
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from './Form'
import './App.css'
import EventData from "./EventData";
import {useState} from 'react'
import About from "./About";


export default function App() {

 const [searchString, setSearchString] = useState("California");


  return (
    <div className="App">
          <img src="http://sites.psu.edu/violenceinamerica/wp-content/uploads/sites/23512/2015/02/3.png" alt="pd"/>
          <h1 id="codeblue">Code Blue</h1>
          <Link to="/About">About Us</Link>
          <Form searchString={searchString} setSearchString={setSearchString}/>
          <EventData searchString={searchString} setSearchString={setSearchString}/>
        <nav>
          <Route path='/' exact component={EventData}/>
          <Route path="About.js" exact component={About}/>
        
        </nav>
    </div>
  );
  }
        
     
  
        
        
      