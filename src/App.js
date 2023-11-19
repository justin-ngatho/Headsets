
import './App.css';
import Navbar from './components/nav';
import Hero from './components/hero';
import TopDeals from './components/deals';
import dealsData from './components/deals-data';
import Pods from './components/pods';
import podsData from './components/pods-data';
import Earphones from './components/earphones';
import earphonesData from './components/earphones-data';
import Headphones from './components/headphones';
import headphonesData from './components/headphones-data';
import Headsets from './components/headsets';
import Footer from './components/footer';
import Offer from './components/offer';

function App() {

  const Reviews = dealsData.map(reviews=>{
    return (
    <TopDeals 
    key={reviews.id} 
    reviews={reviews}
    />
    )
  })

  const podsProp = podsData.map( pods=>{
    return (
    < Pods
    key={pods.id} 
    pods={pods}
    />
    )
  })

  const earphonesProp = earphonesData.map( earphones=>{
    return (
    < Earphones
    key={earphones.id} 
    earphones={earphones}
    />
    )
  })

  const headphonesProp = headphonesData.map( headphones=>{
    return (
    < Headphones
    key={headphones.id} 
    headphones={headphones}
    />
    )
  })


  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <h1 className='main-title'>Top Headsets Deals!</h1>
     <div className = "deals-list">
      { Reviews}
      </div>
      <Headsets/>
      <h1 className='main-title'>Top Earpods Sellers</h1>
      <div className = "deals-list">
      { podsProp}
      </div>
      <Offer/>
      <h1 className='main-title'>Top Earphones Sellers</h1>
      <div className = "deals-list">
      { earphonesProp}
      </div>
      <h1 className='main-title'>Top Headphones Sellers</h1>
      <div className = "deals-list">
      { headphonesProp}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
