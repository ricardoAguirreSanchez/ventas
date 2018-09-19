import React, { Component } from 'react';
import './css/App.css';

import PropTypes from 'prop-types';

class Footer extends Component {
  
  static propTYpeRecibidos = {
    mensajePie : PropTypes.string
  };
  
  render() {
    const {mensajePie} = this.props;
    //si quisiera q tenga un valor por default en caso q no tenga props
    //const {mensajePie = "MensajeDefault"} = this.props;
    return (
      <div className="Footer">
        <p>{mensajePie}</p>
        {/* esto es para mostrar exactamente el html q
        recibo sin dejar q react lo revise 
         <p dangerouslySetInnerHTML={{__html: mensajePie}}/>
        */}
      </div>
    );
  }
}

export default Footer;
