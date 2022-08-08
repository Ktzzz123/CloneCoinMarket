import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdvertiseSubscribeBanner from './components/AdvertiseSubscribeBanner';
import Footer from './components/Footer';
import Header from './components/Header';
import DetailsCoinPage from './pages/DetailsCoinPage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className='bg-slate-50 h-screen'>
      <div className='mx-11'>
        <Header/>
      <body className='bg-slate-50'>
      <div className='m-auto'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/coin/:id' element={<DetailsCoinPage/>}/>
        </Routes>
        <AdvertiseSubscribeBanner/>
        <Footer/>
      </div>
      </body>
      
      </div>
    </div>
  );
}
export default App;
