import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class CrearEstudiante extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      form: {
        nombre: "",
        apellido: "",
        edad: "",
        numeroLegajo: "",
        carrera: "",
        materias: [],
      },
      resultado: "",
      materiasBox: [],
    };
  }
  handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;
    this.setState((state) => ({
      form: {
        ...state.form,
        [nombre]: valor,
      },
    }));
  }
  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:1234/estudiantes", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
        edad: this.state.form.edad,
        numeroLegajo: this.state.form.numeroLegajo,
        carrera: this.state.form.carrera,
        materias: [this.state.form.materias],
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result === "error") {
          this.setState({
            resultado: json.message,
          });
          return;
        }
        this.setState({
          resultado: "El estudiante fue creado con éxito",
        });
      });
  }
  componentDidMount() {
    fetch("http://localhost:1234/materias")
      .then((r) => r.json())
      .then((json) => {
        this.setState({
          materiasBox: json.materias,
        });
      });
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Materias</Form.Label>
            <Form.Control
              name="materias"
              onChange={this.handleChange}
              as="select"
            >
              {this.state.materiasBox.map((m) => (
                <option value={m.materia}>{m.materia}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={this.state.form.nombre}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              value={this.state.form.apellido}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              name="edad"
              value={this.state.form.edad}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Numero de Legajo</Form.Label>
            <Form.Control
              type="number"
              name="numeroLegajo"
              value={this.state.form.numeroLegajo}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Carrera</Form.Label>
            <Form.Control
              type="text"
              name="carrera"
              value={this.state.form.carrera}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button onClick={this.handleSubmit} type="submit">
            Enviar
          </Button>
        </Form>
        <p>{this.state.resultado}</p>
      </div>
    );
  }
}
