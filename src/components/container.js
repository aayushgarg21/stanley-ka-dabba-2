import React from "react";

import {Search} from "./search"
import {Cards} from "./../components/cards"
export class Container extends React.Component
{    
    constructor(props)
    {
        super(props)
        this.state = {restaurant:[]}
        
    }
  getData() {
    
    let value= document.getElementById("test").value;
        console.log(value)

    fetch('https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&q='+value, {
      headers: {
        "user-key": "9115190ac542cd032b874a38a5625591"
      }
    })
      .then( (response) => {
        return response.json();
      })
      .then( (myJson) => {

        this.setState({restaurant:myJson.restaurants});

      })
    }
 

   render()
   {
       console.log( this.state.restaurant);
       return(
           <div>
           <Search  getData = {this.getData.bind(this)}/>
           <Cards restaurants = { this.state.restaurant}/>
           </div>
       );
   }



}
