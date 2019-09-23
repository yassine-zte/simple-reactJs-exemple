import React from 'react';
import Showpost from './Shownew';

function MyNew(props){
 //const MyNew =(props)=>{
    return(
        <table className="table table-striped table-dark" >
              <thead>
                      <tr>
                          <th>titre</th>
                          <th>Description</th>
                      </tr>
   
              </thead>
              <Showpost data={props.data}/> 
        
        </table>
    )

}

export default MyNew;