import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/HeroSection/Hero'
import TrustedBy from './Components/TrustedBy/TrustedBy'
import Stats from './Components/Stats/Stats'
import TrendingProducts from './Components/TrendingProducts/TrendingProducts'
import Products from './Components/Products/Products'
import Mail from './Components/Mail/Mail'
import Specifications from './Components/Specifications/Specifications'
import LandingPage from './Components/ColorPicker/LandingPage/LandingPage'
import CustomerReview from './Components/CustomerReview/CustomerReview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      {/* <TrustedBy /> */}
      
      
    </>
  );
}

export default App
