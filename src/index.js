import React from "react";
import ReactDOM  from "react-dom";
import jentra from '../src/assets/imgs/jentra.jfif';
import malibu from '../src/assets/imgs/malibu.jfif';
import cobalt from '../src/assets/imgs/cobalt.jfif';
import nexia from '../src/assets/imgs/nexia.jfif';
import tiko from '../src/assets/imgs/tiko.jfif';

const cars=[
  {
    cimg:cobalt,
    carName:"Cobalt",
    price:"90$"
  },

  {
    cimg:nexia,
    carName:"Nexia",
    price:"58$"

  },
  {
    cimg:malibu,
    carName:"Malibu",
    price:"150$"

  },
  {
    cimg:jentra,
    carName:"Jentra",
    price:"101$"

  },
  {
    cimg:tiko,
    carName:"Tiko",
    price:"Tekin"

  }

]

ReactDOM.render(
<div className="container">
<div className="row">
  <h1>Hello GM😉😁</h1>
  <div className="col-12 d-flex mt-3  justify-content-between">
    {
      cars.map((item)=>{
     return   <div class="ml-3 card " style={{width:"17rem"}}>
  <img style={{height:"70%"}} src={item.cimg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> Rusumi: {item.carName}</h5>
    <span class="card-text">Price: {item.price}</span>
    
  </div>
</div>
      })
    }
  </div>
</div>
  </div>, document.querySelector("#root"))