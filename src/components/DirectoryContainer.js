import React, { Component } from "react";
import Container from "./Container";
import Header from "./Header";
import Table from "./Table";
import SearchForm from "./SearchForm";
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
      .then(res => this.setState({ results: res.data.results }))
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
    console.log("container" + this.state.result);
    // let resultsData = this.state.results;

    return (
      <Container>
        <Header />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table
          results={this.state.results}
        />
      </Container>
    );
  }
}

export default DirectoryContainer;