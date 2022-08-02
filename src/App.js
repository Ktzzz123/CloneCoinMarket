import './App.css';
import AdvertiseBar from './components/AdvertiseBar';
import AdvertiseSubscribeBanner from './components/AdvertiseSubscribeBanner';
import CoinMarket from './components/CoinMarket';
import Footer from './components/Footer';
import Header from './components/Header';
import TodayCoinBar from './components/TodayCoinBar';

function App() {
  return (
    <div>
     <Header/>
    <div className='bg-black h-1'/>

     <AdvertiseBar/>
     <div className='bg-black h-1'/>
     <TodayCoinBar/>
     <div className='bg-black h-1'/>
     <CoinMarket/>
     <div className='bg-black h-1'/>
     <AdvertiseSubscribeBanner/>
     <div className='bg-black h-1'/>
     <Footer/>
     
    </div>
  );
}
export default App;
