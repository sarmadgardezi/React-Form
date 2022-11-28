import './App.css';
import React from 'react';
import Mainbody from './components/Mainbody';
import Footer from './components/Footer';
import Header from './components/Header';
import Button from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <>
            <div style={{"marginTop":"70px", "marginRight":"70px", "marginLeft":"70px",}}
             className="container">
                <Header></Header>
                <Mainbody></Mainbody>
                <Footer></Footer>
            </div>
        </>
    );

}

export default App;