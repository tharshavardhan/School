import React, { useState, useEffect } from 'react'
import './loginpage.css';
import Swal from 'sweetalert2'
import loginpage from './loginpage.PNG'


const LoginPage = (props) => {
    const [name, setname] = useState("");
    const [password, setPassword] = useState("");

    function onchangehandler(e) {
        setname(e.target.value);
    }

    function onchangehandler1(e) {
        setPassword(e.target.value)
    }


    const button = (e) => {
        e.preventDefault();
        if (name === "" || password === "")
            Swal.fire({
                type: 'error',
                title: 'Please Fill both UserName and Password ',
            })
        else if (name === "harsha" & password === "harsha") {
            sessionStorage.setItem("token", "121212")
            props.history.push('/dashboard')

        } else {
            Swal.fire({
                type: 'error',
                title: 'Please provide valid UserName and Password ',
            })
        }
    }
    let a = [1,2,3,4];
    let b = [1,12,3];
    let c={...a,...b}

    return (
        <div className="bg">
            {console.log(c)}
            <div className="LoginPage">
                <span style={{
                    fontSize: "40px",
                }}>Sign On</span>
                <form style={{ marginTop: "40px" }}>
                    <label style={{ float: "left", color: "#929aa1", fontSize: "14px" }}>USERNAME</label>
                    <input id="form_name" className="input form-control form-control1"
                        placeholder="Enter your SESAID (EX: SESA515576)" value={name}
                        onChange={onchangehandler} autoComplete="off" />
                    <br />
                    <label style={{ float: "left", color: "#929aa1", fontSize: "14px" }}>PASSWORD</label>
                    <input type="password" className="input form-control form-control1" placeholder="Enter your Password" value={password} onChange={onchangehandler1} /><br />
                    <button className="btn btn-primary" onClick={button}>Sign On</button>
                    <br />
                    <div style={{ position: "relative", top: "10px" }}>
                        <a href="" className="change_password">Change Password?</a>
                    </div>
                </form>

            </div >
            <div style={{ textAlign: "center", marginTop: "50px", paddingBottom: "30px" }}>
                <img src={loginpage} />
            </div>
        </div>

    )
}


export default LoginPage;


