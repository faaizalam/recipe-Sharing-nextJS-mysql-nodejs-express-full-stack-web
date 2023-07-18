// import React, { useState } from 'react'
// import Comments from './comments'

//  const Todo = () => {
// const [checks,setchecks]=useState([])
// const [edit,setedit]=useState("")
// const [val,setval]=useState("")
// let [arr,setarr]=useState([{name:"faaiz"},{name:"khurram"},{name:"Afham"}])
// // let edit=''
// const com=[
//     {id:2,comment:"hello"},
//     {id:1,comment:"best"},
   
// ]

// // let arrss=[{name:"faaiz"},{name:"khurram"},{name:"Afham"}]




// const handlechange=((e)=>{
//     const {value,checked}=e.target
//     if (checked) {
//         setchecks([...checks,value])
//         console.log(value)
        
//     }else{
//         setchecks([...checks.filter((x)=>x!==value)])

//     }


// })
// console.log(checks)
// const mydel=((u)=>{
//     console.log("delete")
//     setarr([...arr.filter((x)=>x.name!==u)])

// })

// const myedit=((x)=>{
//     // edit="Afham"
    
//     setedit(x)
//     setval(x)
//     // console.log("edit",edit)
    
    
// })
// const editfun=((x)=>{
//     // console.log(x)
//     setval(x)
//     // setedit(x)
  


// })


// const Saved=(name)=>{
//     console.log("org names",name)
//     setedit("")
//     const exist=arr.find((x)=>x.name===name)
//     // console.log(exist)
//     if (exist) {
//         setarr(arr.map((x)=>x.name===exist.name?{name:val}:x))
//         // console.log(arr)
        
//         // setarr(arr)
        
//     }
//     // setarr(...arr)

// }

//   return (
//       <div>
        
//         <h1>httt</h1>
//       {
//           arr.map((x)=>(
//               <div>
//             {x.name}
//             <input onChange={handlechange} type='checkbox' checked={checks.includes(x.name)} value={x.name} name="f"></input>
//             {
//                 checks.includes(x.name)&&
//                 (<>
//                 <button onClick={()=>mydel(x.name)}>Delete</button><br></br>
                
                
//                 </>)
//                 }
//             <button onClick={()=>myedit(x.name)}>edit</button>



//             {
                
               
//                 edit.includes(x.name)&&(<><input type='text' value={val} placeholder='type' onChange={(e)=>editfun(e.target.value)}/>
//                   <button onClick={()=>Saved(x.name)}>Save</button>
                
//                 </> )
                
//             }

//            </div>
//       ))
//       }
//       <Comments com={com}/>
//     </div>

  
//   )
// }


// export default Todo 