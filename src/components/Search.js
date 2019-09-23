import React from 'react';

function searchtext(props){
    return(
       <div className="row mt-4">
           <div className="col-md-12">
            <input placeholder="Rechercher" onChange={props.recherche} className="form-control"/>
           </div>

       </div>
    )

}

export default searchtext;
