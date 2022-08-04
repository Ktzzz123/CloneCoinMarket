import './App.css';
import AdvertiseBar from './components/AdvertiseBar';
import AdvertiseSubscribeBanner from './components/AdvertiseSubscribeBanner';
import CoinMarket from './components/CoinMarket';
import Footer from './components/Footer';
import Header from './components/Header';
import TodayCoinBar from './components/TodayCoinBar';

function App() {
  return (
    <div className='bg-slate-50 h-screen'>
      <div className='mx-11'>
        <Header/>
      <body className='bg-slate-50'>
      <div className='m-auto'>
        <AdvertiseBar />
        <TodayCoinBar/>
        <CoinMarket/>
        <AdvertiseSubscribeBanner/>
        <Footer/>
      </div>
      </body>
      
      </div>
    </div>
  );
}
export default App;
