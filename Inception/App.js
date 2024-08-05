import React from 'react';
import ReactDOM from 'react-dom/client'

    const Header=()=>{
        return(
        <div>
       
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge " viewBox="0 0 16 16">
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/>
</svg>
            <input />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg>
        </div>
        );
    }
   const Heading=()=><h1 className='heading'>
       Namaste React ✌️✌️</h1>
   

   const Description=()=>{
    return (
    <div className='container'>
        <Header/>
        {<Heading/>}
<h1>React is fun to learn</h1>
    </div>
    )
   }
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Description/>);