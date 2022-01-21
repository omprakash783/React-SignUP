import React, { useState } from 'react' 
import SignUpForm from './signupform.js'

import './signup.css'

function SignUp(){

    const [userType,setUserType] = useState('Talent')

    return(
        <div className="register-form">
                    <button onClick={()=>setUserType('Talent')} className="btn btn-primary btn1">
                      TALENT SIGN UP
                    </button>
                    <button onClick={()=>setUserType("Fan")} className="btn btn-primary btn2">
                      FAN SIGN UP
                    </button>
        
        <div className="form-group">
        <h4> Create Your {userType} Account </h4>
         </div>
         <SignUpForm userType={userType} />
         </div>
    )
    
}

export default SignUp 