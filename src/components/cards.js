
import React from"react";
import {Card} from "./../components/card"
export const Cards = (props)=> { 
    const style_row =
    {
        marginLeft:30
    }
    return(
          <div className="row" style={style_row}>
        
       { props.restaurants.map(element => {
            return (
                <Card className="col-sm-4"  card = {element}/>
               
            )
        })}
       
        </div>
    )
}