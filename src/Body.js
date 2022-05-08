import React, { Component } from "react";
import Welcome from "./Welcome";
import CrearEstudiante from "./CrearEstudiante";
import Container from "react-bootstrap/Container";
import ListarEstudiantes from "./ListarEstudiantes";

export default class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fluid className="body">
        {this.props.itemClicked === 0 && <Welcome />}
        {this.props.itemClicked === 1 && <CrearEstudiante />}
        {this.props.itemClicked === 2 && (
          <ListarEstudiantes inputValue={this.props.inputValue} />
        )}
      </Container>
    );
  }
}
