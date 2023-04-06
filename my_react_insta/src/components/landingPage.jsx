import landingImg from "../images/landing.png"
import { useNavigate } from "react-router-dom"
const LandingPage=()=>{
    var navigate = useNavigate()
    function handlebtn(){
        navigate('/new/posts')
    }
return(
    <> 
    <div id="LandConatiner">
       <div className="h1">
        <h1>10x Academy</h1>
     </div>
     <div>
        <img className="home-content" src={landingImg} alt="" />
        <span id="Enter-Button"><button id="button" onClick={handlebtn}>Enter</button></span>
     </div>
        </div>
    </>
)
}
export default LandingPage