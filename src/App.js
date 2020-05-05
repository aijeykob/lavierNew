import React from 'react';
import Header from './components/header/Header'
import Main from "./components/Main/Main";
import Reviews from "./components/reviews/Reviews";
import Buy from "./components/Buy/Buy";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <wrapper>
            <Header/>
            <Main/>
            <Reviews/>
            <Buy/>
            <Footer/>
        </wrapper>
    );
};

export default App;
