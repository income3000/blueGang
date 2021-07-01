import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from './Form'
import EventData from "./EventData";
import {useState} from 'react'
// import Links from './Links'
// import Incidents from './Incidents'

// const API_URL =
//   "https://api.846policebrutality.com/api/incidents?&filter%5Bstate%5D=";

export default function App() {





  
  // const [link, setLink] = useState();
   const [searchString, setSearchString] = useState("California");
  // const [results, setResults] = useState([]);
  // const getData = async () => {
  //   const response = await fetch(API_URL + searchString);
  //   const data = await response.json();
  //   setResults(data.data);
  //   console.log(data.data)
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSearchString(searchString)
  // }
  // useEffect(() => {
  //   getData();
  // }, [setLink]);

  return (
    <div className="App">
      {/* <Form onSubmit={handleSubmit}/> */}
     
      {/* {results.length &&
        results.map((ele, i) => (
          <div className="d3">
          
          <Link to={`/details/${ele.id}`}>{ele.links}</Link>
          </div>
        ))} */}
        
         <Form searchString={searchString} setSearchString={setSearchString}/>
        <EventData searchString={searchString} setSearchString={setSearchString}/>
       
        <Route path='/' exact component={EventData}/>
        {/* <Link to={`/details/${ele.id}`}>{ele.links}</Link> */}
    </div>
  );
}
