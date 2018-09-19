import React, { Component } from 'react';
import logo from './imagenes/logo.svg';
import './css/App.css';

import PropTypes from 'prop-types';

//esto es para evitar usar tag <a>
import { Link } from 'react-router-dom';

class Header extends Component {
  //definimos los prop q recibimos
  static proptypesRecibidos = {
    title:  PropTypes.string,
    items:  PropTypes.array
  };
  render() {

    //asignamos los prop (que ya tienen formato) a las variables title e item
    const {title,items} = this.props;
    //para imprimir map como varios li
    const listItemsTitle = items.map((item,key) =><li key={key}><Link to={item.url}>{item.title}</Link></li>);
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h1 className="App-title">{title}</h1>
        </div>
        <div><ul className="Menu">{listItemsTitle}</ul></div>
      </div>
    );
  }
}

//de Header.js lo q exporto para su uso es la clase Header (que tranquilamente pudo tener otro nombre) 
export default Header;
