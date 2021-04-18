import React from 'react'


const  Actor=({name,nickname,birth,appearance,portrayed,image,occupation,status,key})=> {
    return (
  
      

              <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <img src={image}  alt="noImage" />
   
    </div>
   
 
    <div className="flip-card-back">
      <div style={{marginTop:"10%"}}>
      <h3>Name: {name}</h3> 
      <hr></hr>
      <ul key={key}>
        
      <li>Nickname: {nickname}</li>
      <li>Portrayed: {portrayed}</li>
      <li>Occupation:{occupation[0]}</li> 
   <li>Status: {status}</li>
      <li>Birth:{birth}</li>
      

      </ul>
      </div>
    </div>
  </div>


  
            
        
         
        
              
         
   
      </div>
    
        
    )
}

export default Actor
