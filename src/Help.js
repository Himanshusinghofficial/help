import React from 'react';
import AddReg from './layout/AddReg';
import AddReq from './layout/AddReq';
import Addsugg from './layout/Addsugg';
import Regcom from './logs/Regcom';
import Regser from './logs/Regser';
import Sugg from './logs/Sugg';
const Help = () => {
    return (
     <div>
         <h4 style={{margin:'40px 0px 0px 0px'}}>
          Help & Support
         </h4>
         <div style={{margin:'0px 0px 40px 0px'}}>Available 24×7 for you</div>
      <div class="card br">
        <div class="row">
           <div class="Scard col s12 m3">
             <Regcom/>
             <Regser/>
             <Sugg/>
             <AddReg/>
             <AddReq/>
             <Addsugg/>
            </div>
          <div class="col s12 m9">
           <h5 class="center">
           <u>Reach Out to Us</u>
           </h5>
           <div class="Details">
           <div><b>Details</b></div>
           <br/>
           <i class="fas fa-map-marker-alt fa-lg"></i><span>&ensp;&ensp;Address: Community Centre, Ground Floor, Shop No G1,G2 & G3 Allied Chambers, Janakpuri, Delhi, 110058</span><br/>
           <br/>
           <i class="fas fa-envelope fa-lg"></i><span>&ensp;Email: hs882677@gmail.com</span><br/>
           <br/>
           <i class="fas fa-mobile-alt fa-lg"></i><span>&ensp;&ensp;Phone: 8810428050</span>
           </div>
          </div>
        </div>
      </div>
     </div>
    )
}

export default Help
