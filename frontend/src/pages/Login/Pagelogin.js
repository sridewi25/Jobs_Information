import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/style.css";
import image_login from "../Login/image-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser,faLock } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

function Pagelogin(props) {
  const { loginCbHandler } = props;
  const [datalogin, setDatalogin] = useState({
    username:"",
    password:""
  })

    const loginUser = async () => {
        try {
            let result = await axios({
                method: 'POST',
                url: 'http://localhost:3000/users/login',
                data: datalogin
            })
            const access_token = result.data
            localStorage.setItem('access_token', access_token)
            loginCbHandler(true)   
        } catch (err) {
            console.log(err.message)
        }
    }
    const submitHandler = () => {
        loginUser()
        
    }
  return (
    <div className="bg-login">
      <br></br>
    <div className="container-md">
      <div className="row justify-content-center bg-row row-login">
        <div className="col-7 bg-col">
          <img src={image_login} alt="" align="center" className="img-responsive"/>
        </div>
        <div className="col-5 bg-col-1">
          <h1 className="h1-login">Welcome</h1>
          <h4 className="h4-login">Sign in to Your Account</h4>
          {/* <form> */}
            <div className="input-group flex-nowrap input-align">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={(e) => setDatalogin({ ...datalogin, username: e.target.value })}
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
                onChange={(e) => setDatalogin({ ...datalogin, password: e.target.value })}
              />
            </div>

            <div className=" justify-content-center input-group flex-nowrap submit-btn input-align">
              <button
                onClick={() => submitHandler()}
                className="btn text-add">
                Sign in
              </button>
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
   
  </div>
  )
}

export default Pagelogin