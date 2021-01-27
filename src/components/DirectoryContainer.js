import React, { Component } from "react";
import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
import Header from "./Header";
import Table from "./Table";
import SearchForm from "./SearchForm";
// import EmployeeDetail from "./EmployeeDetail";
import search from "../utils/API";


class DirectoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: []
    };
  }

  loadDirectory = () => {
    search()
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadDirectory();
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // this.loadDirectory(this.state.search);
  };

  render() {
    console.log(this.state.result);
    return (
      <Container>
        <Header />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table></Table>
      </Container>
    );
  }
}

export default DirectoryContainer;
