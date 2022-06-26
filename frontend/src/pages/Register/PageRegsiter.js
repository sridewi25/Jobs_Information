import React,{useEffect, useState} from 'react'
import image_login from "../Login/image-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faFlag, faVenusMars, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import './style.css'
import {useDispatch,useSelector} from 'react-redux';
import {adduser} from '../../actions/useraction'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

function PageRegsiter() {
  const navigate = useNavigate()

  const [name,setName] = useState("") 
  const [email,setEmail] = useState("")
  const [username,setUsername] = useState("")  
  const [password,setPassword] = useState("") 
  const [country,setCountry] = useState("") 
  const [gender,setGender] = useState("") 

  const dispatch = useDispatch()

  const {addUsersResult} = useSelector ((state)=>state.userReducer)

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(adduser({name:name,email:email,username:username,password:password,country:country,gender:gender}))
  }

  useEffect(()=>{
    if(addUsersResult){
      Swal.fire(
        'Register Successfully!',
        'Clicked the button!',
        'success'
      )
      navigate("/")
    }
    else{
     
    }
  })

  return (
    <div className="bg-login">
    <div className="container-md">
      <div className="row justify-content-center bg-row row-regis">
        <div className="col-7 bg-col">
          <img src={image_login} alt="" align="center" className="img-responsive"/>
        </div>
        <div className="col-5 bg-col-1">
          <h1 className="h1-register">Welcome</h1>
          <h4 className ="h4-register">Create Your Account</h4>
          <form onSubmit={(event)=>handleSubmit(event)}>

          <div className="input-group flex-nowrap input-align">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-group flex-nowrap input-align">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="input-group flex-nowrap input-align">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className="input-group flex-nowrap input-align">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="input-group flex-nowrap input-align">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              />
            </div>

            <div className="input-group flex-nowrap input-align">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Gender: Female or Male"
                name="gender" 
                value={gender}
                onChange={(event) => setGender(event.target.value)}
              />
            </div>

            <div className=" justify-content-center input-group flex-nowrap submit-btn input-align">
              <button
                className="btn text-add" type="submit">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
  </div>
  )
}

export default PageRegsiter