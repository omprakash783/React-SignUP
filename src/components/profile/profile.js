import React from 'react' 
import './profile.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router';

function Profile(){
    const username= localStorage.getItem('username')
    const userType = localStorage.getItem('userType')
    const firstname = localStorage.getItem('firstname')
    const lastname = localStorage.getItem('lastname')

    let history = useNavigate()

    function handleClick(){
        history('/signup')
    }

    return(
        <div className='profile-page'>
            <div className='profile'>
                <h4 className='h4element'> You successfully registered as a {userType}</h4>
                <h1 className='firsth1'>WELCOME @{username} </h1>
                <h1>Full Name : {firstname} {lastname}</h1>
                <button onClick={handleClick} className='btn btn-primary backbtn'>BACK TO SIGN UP PAGE</button>
            </div>

        </div>
    )
}

export default Profile