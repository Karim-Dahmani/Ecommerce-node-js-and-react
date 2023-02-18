
import React from 'react';

import Announcement from '../Components/Announcement';
import Categories from '../Components/Categories';
import Slider from '../Components/Slider';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';
import Footer from '../Components/Footer';
import Newsletter from '../Components/Newsletter';

const Home = () => {
    return (
        <div  className='container'>
          
           <Announcement/>
           <Navbar/>
           <Slider/>
           <Categories/>
           <Products/>
           <Newsletter/>
           <Footer/>
           
           
         
        </div>
    );
}

export default Home;
