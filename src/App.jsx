import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router-dom';

import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'

class App extends Component {
    render() {
        return(
            <div className='layout'>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;

// inactive