import React, { Component } from 'react';
import './global/css/App.css';

//componentes
import Header from './global/Header.js';
import Content from './global/Content.js';
import Footer from './global/Footer.js';

import PropTypes from 'prop-types';

//datos hardcodeados como un array
import Data from '../data/datos';
//estos se envian entre {} al componente

//los jsx de react necesitan que si tengo mas de un componente lo tengo que meter dentro de un wrapper (div)
class App extends Component {

  //ahora ya tenemos un hijo q nos lo da el router
  static proptypesRecibidos = {
    children:  PropTypes.object
  };

  render() {
    
    const {children} = this.props;

    return (
      <div >
        <div>
          <Header title="CodigoR" items={Data} />
          <Content contenido={children}/>
          <Footer mensajePie="&copy; 2018 GitHub, Inc. Terms Privacy Security Status Help Contact GitHub Pricing API Training"/>
        </div>
      </div>
    );
  }
}

export default App;
