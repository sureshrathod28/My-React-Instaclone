import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import "./App.css"
const Newpost=()=>{
const [form,setForm]=useState({myFile:""})
const [users,setUsers]=useState([])
var navigate = useNavigate()

const handleForm=(e)=>{
    console.log(e.target.value,e.target.name)
    setForm({
        ...form,
        [e.target.name]:e.target.value

    })
    
}
const handleFileUpload=async(e)=>{
    const file=e.target.files[0]
    const base64=await convertToBase64(file)
    setForm({...form,myFile:base64})
  
}
    
const handleSubmit=async(e)=>{

      e.preventDefault()
      
      const response=await fetch('https://instaclone-node-8om8.onrender.com/demo',{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
            'Content-Type':'application/json'
        }
      })
      const data =await response.json()
    //   console.log(data)
    //   console.log(form)
      navigate('/posts/all')

}

const getUsers=async()=>{
    const response=await fetch('https://instaclone-node-8om8.onrender.com/demo',{
        mathod:'GET'
    })
    const data=await response.json()
    setUsers(data)
}
useEffect(()=>{
    getUsers()
   },[getUsers()])

    return(
        <>
        <div id="container">
        <span>
        <img src="https://www.vectorlogo.zone/logos/instagram/instagram-ar21.svg" className="img"  alt="insta logo" />
        
        </span>
        
        
        <span>
            <img src="https://www.svgrepo.com/show/506694/camera.svg" className="cam" alt="" />
        </span>
        <div className="line">
           
        </div>

        <div className="form">
         <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
         <label htmlFor="file">Upload Images </label>
         <input type="file" lable="image" name="myFile" id="file-upload" accept=".jpeg,.png,.jpg,.svg" onChange={(e)=>handleFileUpload(e)} /> <br/>
         <input className="input" name="author" type="text" onChange={handleForm} placeholder="Author" /> 
         <input className="input" name="location" type="text" onChange={handleForm} placeholder="location" /> <br/>
         <input className="Desc"  name="description" type="text" onChange={handleForm} placeholder="Description"/> <br/>
         <input type="submit" id="submit"/>
         </form>
        </div>
        
        </div>
        </>
    )
}
export default Newpost

function convertToBase64(file){
    return new Promise((resolve,reject)=>{
       const fileReader=new FileReader()
       fileReader.readAsDataURL(file)
       fileReader.onload=()=>{
           resolve(fileReader.result)
       }
       fileReader.onerror=(error)=>{
           reject(error)
       }
    })
}