import React from 'react'
import { IoIosFunnel } from "react-icons/io";
import { RiShareBoxFill } from "react-icons/ri";

const Search = () => {
  return (
    <div style={{width:"98%",marginTop:"30px",display:"flex", justifyContent:"space-between"}}>
        <div></div>
        <div style={{width:"20%",height:"35px",display:"flex",gap:"5px"}}>
            <input style={{width:"75%",height:"30px",alignItems:"center",border:"1px solid lightgray",fontSize:"12px",color:"gray",textIndent:"10px",
        borderRadius:"5px"}} placeholder='Search'/>
             <button style={{width:"30px",height:"30px",border:"none"}}>
               <IoIosFunnel style={{textAlign:"center",marginTop:"5px"}}/>
             </button>
             <button style={{width:"30px",height:"30px",border:"none"}}>
                <RiShareBoxFill style={{textAlign:"center",marginTop:"5px"}}/>
             </button>

        </div>
    </div>
  )
}

export default Search