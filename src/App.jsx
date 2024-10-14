import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Body from './Components/Body';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
           <Body />
           <Blog />
           <Footer />
        </div>
    );
};

export default App;
