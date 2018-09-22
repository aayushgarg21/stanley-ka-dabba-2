import React from "react";
export const Card = (props)=>
{
  const style =  {
    maxWidth: 310,
    margin:10,
    marginLeft:5
  }
  const btn_style={
    padding :10
  }
  
    var category = {};
    var categories =[];
    function putdata()
    {
     var c = document.getElementById("add").value;
     alert(c);
     category[c]=["REST1","REST2","rest3"];

     fetch('http://localhost:3000/categories', {
      method: 'POST',
      headers: {
        "user-key": "9115190ac542cd032b874a38a5625591",
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
})



     
     
    

    }
  
  return(
    <div>
    <div className="card" style = {style}>
    <img className="card-img-top" src={props.card.restaurant.thumb} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">  {props.card.restaurant.name}</h5>
      <p className="card-text">{props.card.restaurant.location.address}</p>
      <a href="#" class="btn btn-primary"  style = {btn_style}>VISIT</a>
      <hr/>
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">ADD TO CATEGORY
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#" className="btn btn-priamry" data-toggle="modal" data-target="#myModal" >ADD TO EXISTING</a></li>
    <li><a href="#" className="btn btn-priamry" data-toggle="modal" data-target="#myModal1" >CREATE NEW CATREGORY</a></li>
  
  </ul>
</div> 

  
    </div>
  </div>
  <div class="modal fade" id="myModal" role="dialog">
  <div class="modal-dialog modal-sm">
  <div class="modal-content">
        <div class="modal-header">
     
          <h4 class="modal-title">Select Catergry</h4>
        </div>
        <div class="modal-body">
          <ul>
            <li><a href="">Category1</a></li>
            <hr/>
            <li><a href="">Category2</a></li>
            <hr/>
            <li><a href="">Category3</a></li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

        </div>
      </div>
  </div>
  
</div>
<div class="modal fade" id="myModal1" role="dialog">
  <div class="modal-dialog modal-sm">
  <div class="modal-content">
        <div class="modal-header">
     
          <h4 class="modal-title">Create Catergry</h4>
        </div>
        <div class="modal-body">
          <input type="text" id="add" placeholder=" Enter Category name"></input>
        </div>
        <div class="modal-footer">
        <button type="button"  class="btn btn-default" data-dismiss="modal" onClick={putdata}>Create</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

        </div>
      </div>
  </div>
  
</div>
</div>
  );

}