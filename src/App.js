import React from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import DownloadApp from './components/DownloadApp';
import Products from './components/Products';
import MiddleSection from './components/MiddleSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className=' bg-gray-100 h-full '>
      <Navbar />
      <div className='container mx-auto'>
        <Herosection />
        <DownloadApp />
        <Products />
        <MiddleSection />
      </div>
      <Footer />

    </div>

  );
}

export default App;
