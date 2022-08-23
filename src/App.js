import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import DetailsCoinPage from './pages/DetailsCoinPage';
import Homepage from './pages/Homepage';
import io from 'socket.io-client'
import { useEffect, useState } from 'react';
import AdvertiseSubscribeBanner from './components/homePage/AdvertiseSubscribeBanner';
import Login from './pages/Login';
import authContext from './utils/auth/authContext';
import React from 'react'

const socket = io('http://io.nvdise.space', {
  timeout: 2000,
  secure: true,
  reconnection: false,
  transports: ['websocket'],
  // transports: ['polling'],
})
export const getSocket=()=>{
  return socket;
  
}


function App() {
  useEffect(()=>{
    socket.on('connect',()=>{
      console.log(socket);
    })
  })
  
  const [authenticated,setAuthenticated] = useState(false);
  const [token, setToken] = useState('')
  const [user, setUser] = useState({})

  useEffect(()=>{
    console.log(token)
    console.log(JSON.stringify(user))
  },[token,authenticated,user])

  return (
    <authContext.Provider value={{authenticated,setAuthenticated,token, setToken, user,setUser}}>

    <div className='bg-slate-50 h-screen'>
        <Header/>
      <div className='px-32 bg-slate-50'>
      <body className='bg-slate-50'>
      <div className='m-auto'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/coin/:id' element={<DetailsCoinPage/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <AdvertiseSubscribeBanner/>
        <Footer/>
      </div>
      </body>
      
      </div>
    </div>
    </authContext.Provider >
  );
}
export default App;
