import { useEffect, useState } from 'react';
import './App.css';
import EditableText from './EditableText';

function App() {
  // TODO: Object binded to header, should be initialized by getting values from Redux state, etc
  let [headerObject, setHeaderObject] = useState(
    {
      FirstName:"Saket",
      LastName:"Kumar",
      Age:"18"
    });
  
  // flag to keep track if API call is to be made or not
  let [APIflag, setAPIflag] = useState(false);

  // function responsible to make API call
  const sendAPIRequest = (e) =>{
    // TODO: write logic to send API request
    console.log(headerObject);
  };

  // whenever APIflag changes API call will be made
  useEffect(()=>{
    if(APIflag){
      // if API flag is true then make API call
      sendAPIRequest();
      
      // after API call reset the API flag
      setAPIflag(false);
    }
  },[APIflag]);

  // XXX: ignore this CSS - to align items vertically
  const divStyle = {
    'display': 'flex',
    'flexDirection': 'column',
  };

  return (
    <div className="App">
      <div style={divStyle}>

        {/* TODO: replace all input/Text tags in header component in project */}
        <EditableText sKey="FirstName" value={headerObject.FirstName} headerObj={headerObject} onUpdate={setHeaderObject} setAPIflag={setAPIflag}/>
        <EditableText sKey="LastName" value={headerObject.LastName} headerObj={headerObject} onUpdate={setHeaderObject} setAPIflag={setAPIflag}/>
        <EditableText sKey="Age" value={headerObject.Age} headerObj={headerObject} onUpdate={setHeaderObject} setAPIflag={setAPIflag}/>

      </div>
      
      {/* Button added to check the value stored in 'headerObject' */}
     <button
      onClick={()=>{console.log(headerObject);}}
      >
        Click me
     </button>

    </div>
  );
}

export default App;
