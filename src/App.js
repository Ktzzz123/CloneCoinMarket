import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/homePage/header/Header';
import DetailsCoinPage from './pages/DetailsCoinPage';
import Homepage from './pages/Homepage';
import io from 'socket.io-client'
import { Suspense, useEffect } from 'react';
import Login from './pages/Login';
import BackgroundService from './background-services';
import { glb_sv } from './utils';
import { eventList } from './utils/constants/eventLists';
import StaticStore from './utils/StaticStore';



// const socket = io('http://localhost:2022', {
//   timeout: 2000,
//   secure: true,
//   reconnection: false,
//   transports: ['websocket'],
//   // transports: ['polling'],
// })

// export const getSocket = () => {
//   return socket;

// }


function App() {

  useEffect(() => {
    loadConfigInfo()
  }, [])

  const loadConfigInfo = async () => {
    let Reload = setTimeout(() => {
      window.location.reload(false)
    }, 3000)
    await fetch('/assets/config.json', {
      mode: 'cors'
    }).then((r) => r.json())
      .then((resp) => {
        window.clearTimeout(Reload)
        console.log('config info ', resp);
        glb_sv.stream_server = resp.stream_server
        console.log('glb_sv stream_sever', glb_sv.stream_server)
        setTimeout(() => StaticStore.connect_socket(resp.stream_server), 300)
        
      })
  };

  return (
    <Suspense fallback={<></>}>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/coin/:id' element={<DetailsCoinPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <BackgroundService />
    </Suspense>
  );
}
export default App;
