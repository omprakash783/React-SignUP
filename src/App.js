import React from 'react';
import SignUp from './components/signup/signup';
import Home from './components/home/home'
import Profile from './components/profile/profile'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}  />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;