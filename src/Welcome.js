import React, { Component } from "react";
import Container from "react-bootstrap/Container";

export default class Welcome extends Component {
  render() {
    return (
      <>
        <Container>
          <h1>Bienvenido!</h1>
          <h2>A mi app de React</h2>
          <h3>
            Creada para el primer módulo del programa de entrenamiento del LIA
          </h3>
        </Container>
      </>
    );
  }
}
