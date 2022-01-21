import React from 'react' 
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import './home.css'

function Home(){
    return(
        <div className='home'>
            <div className="component">
                <h2 className='title'>WELCOME TO UPFORCE</h2>
                <Link className="link" to='signup'>SIGN UP TO CONTINUE </Link>
            </div>
        </div>
    )
}

export default Home