import "./App.css";
import Menu from "./Menu";
import Body from "./Body";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemMenu: 0,
      searchTxt: "",
    };
    this.handleItemMenuClicked = this.handleItemMenuClicked.bind(this);
    this.handleDoSearch = this.handleDoSearch.bind(this);
  }
  handleDoSearch(inputValue) {
    this.setState({
      searchTxt: inputValue,
      itemMenu: 2,
    });
  }

  handleItemMenuClicked(itemClickeado) {
    this.setState({
      itemMenu: itemClickeado,
    });
  }

  render() {
    //Deje en la clase 6 minuto 12:40
    return (
      <>
        <Menu
          doSearch={this.handleDoSearch}
          handler={this.handleItemMenuClicked}
        />
        <Body
          inputValue={this.state.searchTxt}
          itemClicked={this.state.itemMenu}
        />
      </>
    );
  }
}
