import React, { Component } from 'react';
import './css/App.css';

import ProtoType from 'prop-types';

class Content extends Component {
  //primera clase q se ejecuta y si dentro quiero usar this, necesito primero
  //usar super
  constructor(){
    super();
    this.state = {
      count : 0,
      numero1 : 0,
      numero2 : 0,
      resultadoSuma : 0,
    }

    //esto para q el metodo tenga acceso a las variables de toda la clase (osea la this)
    this.manejoTuClick = this.manejoTuClick.bind(this);
    this.cambioInput = this.cambioInput.bind(this);
    this.sumar = this.sumar.bind(this);
    
  }

  //se ejecuta solo cuando el componente ya se monto, es decir se cargo el content.js, no por cada render que 
  //haga este mismo
  componentDidMount(){
    console.log("luego de cargar todo");
    this.setState({
      count : 1
    })

  }

  //dentro del evento "e" que genera el click, trae en el target el id del button
  manejoTuClick(e){
    if(e.target.id === 'sumar'){
      this.setState({
        count : this.state.count + 1
       })
    }
    if(e.target.id === 'restar'){
      this.setState({
        count: this.state.count-1
      })
    }
    if(e.target.id === 'resetear'){
      this.setState({
        count: 1
      })
    }
  }

  //SOlo sobreescribe el state que uso no los demas que ya tiene
  sumar(e){
    this.setState({
      resultadoSuma : this.state.numero1 + this.state.numero2 ,
    })
  }

  cambioInput(e){
    if(e.target.id === 'numero1'){
      this.setState({
        numero1 : Number(e.target.value)
      })
    }else{
      this.setState({
        numero2 : Number(e.target.value)
      })
    }

  }


  static proptypesRecibidos = {
    contenido:  ProtoType.object
  };

  render() {

    const {contenido} = this.props;


   return (
      <div className="Content">
        <h1>You can now view app-gestor-pedidos in the browser.</h1>
        <p>Do not use empty rulesets</p>
        <p>Contador: {this.state.count}</p>
        <button id="sumar" onClick={this.manejoTuClick} >Sumar</button>
        <button id="restar" onClick={this.manejoTuClick}>Restar</button>
        <button id="resetear" onClick={this.manejoTuClick}>Resetear</button>

        <h2>Calculador</h2>
        <p>
          <input id="numero1" type="number" value={this.state.numero1} onChange={this.cambioInput}></input>
          +
          <input id="numero2" type="number" value={this.state.numero2} onChange={this.cambioInput}></input>
          <button id="btnSumar" onClick={this.sumar}> CALCULAR-> </button> RESULTADO:{this.state.resultadoSuma} 
        </p>

        <div>{contenido}</div>
      </div>
    );
  }
}

export default Content;
