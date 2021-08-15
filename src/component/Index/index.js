import React, {Component} from 'react';
import Home from './../Home';
import About from './../About';
import Portifolio from './../Portifolio';
import Profile from './../Profile';
import Social from './../Sociallinks';
import Work from './../Work';
class Index extends React.Component{
    render() {
        return(
            <div className="index">
                <Home></Home>
                <Work></Work>
                <Portifolio></Portifolio>
                <Profile></Profile> 
                <About></About>
                <Social></Social>
            </div>
            );
    }
}

export default Index;
