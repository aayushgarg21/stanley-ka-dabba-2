
import React from 'react';
import ReactDOM from "react-dom";
import {Container} from "./../components/container"
import Appbar from "./../components/bar"

class App extends React.Component{
  
  render()
  { 
    return(
      <div>
      <Appbar/>
      <Container/>
     </div>
    );

  }
}
ReactDOM.render(<App/>,window.document.getElementById("root"));    