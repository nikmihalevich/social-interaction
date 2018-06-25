import React from 'react';

import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'

const Layout = props => ({
    render() {
      return (
        <div className="layout">
          <Header />
            <div className="content">
              {props.children}
            </div>
          <Footer />
        </div>
      );
    }
  });


export default Layout;