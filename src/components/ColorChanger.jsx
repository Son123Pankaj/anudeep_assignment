import { useState } from "react"

export default function ColorChanger(){
    const [color,setColor]=useState()

    function changeColor(){
         document.body.style.backgroundColor=color;
         document.body.style.color=color==='#000000'? 'white' :'black'
    }
    return(
           <div>
            <h2>BackGround Color Changer </h2>
            <input type={color} onChange={(e)=>setColor(e.target.value)} style={{width:"120px", height:"50px"}}/>
            <button onClick={changeColor} style={{padding:'10px 25px',background:'green',color:'white',border:'none',cursor:'pointer'}}>
               Change Color
            </button>


           </div>

    )
}