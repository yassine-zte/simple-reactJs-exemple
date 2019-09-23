import React from 'react';

function Showpost(props){
      const Shown=()=>{
        
       return props.data.map((item,i) => {
            return(
                
                <tr key={i}>
                 <td>{item.title}</td>
                 <td>{item.description}</td>
                
                </tr>
            )
            });

      }


    return(
        <tbody>
        
         { 
             Shown()
            
         }
     </tbody> 
    )
}
export default Showpost;