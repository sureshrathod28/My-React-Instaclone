import {useState,useEffect} from "react"
//import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import heart from "../images/heart.png"
import send from "../images/send.jpg"
import "./App.css"
//import Newpost from "./newpost"
const PostView=()=>{
   const [liked,setLiked]=useState(0,true)
   const [users,setUsers]=useState([])
   var navigate=useNavigate()
  // const {userId}=useParams()

   function handlelikes(){
      setLiked(liked)
      if(!liked){
        setLiked(liked+1)
      }else{
        setLiked(liked-1)
      }

   }

const getUsers=async()=>{
  const response=await fetch('https://instaclone-node-8om8.onrender.com/demo',{
      mathod:'GET'
  })
  const data=await response.json()
  setUsers(data.sort((a, b) => b.createdAt - a.createdAt))
}
var getusers=getUsers()
useEffect(()=>{
  getUsers()
 },[getusers])


    return(
        <>
        <div>
        <span>
        <img src="https://www.vectorlogo.zone/logos/instagram/instagram-ar21.svg" className="img"  alt="insta logo" />
        
        </span>
        
        
        <span>
            <img src="https://www.svgrepo.com/show/506694/camera.svg" className="cam" onClick={()=>{navigate('/new/posts')}} alt="" />
        </span>
        <div className="line">
           
        </div>
        {users.map(user=>  
        <div id="rectangle"  key={user._id}>
        <div className="post-header">
        <div className="username"><b>{user.author}</b>
          <div className="location">{user.location}</div>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
         </div>
         <div className="posts">
            <img id="post-image" src={user.myFile} alt="" />
        </div>
        <div id="footer">
            <span>
            <img className="heart" src={heart} alt="" onClick={handlelikes} />
            </span>
            <span>
                <img className="send" src={send} alt="" />
            </span>
            <span className="date">
              <b>{user.createdAt}</b>  
            </span>
            <div>{liked} likes</div>
            <div className="caption">
               <b>{user.description}</b> 
            </div>
        
        </div>
        </div>
         </div>
          </div>)}

        </div>

        </>
    )
}
export default PostView