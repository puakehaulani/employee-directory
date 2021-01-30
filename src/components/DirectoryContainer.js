import React, { Component } from "react";
import Container from "./Container";
import Header from "./Header";
import Table from "./Table";
import search from "../utils/API";
import usertest from "../usertest.json";


class DirectoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: [],
      filteredResults: []
    };
  }

  loadDirectory = () => {
    search()
      .then(res => {
        return res.data.results ? (this.setState({ results: res.data.results })) : (this.setState({ results: usertest }))
      })
    // .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadDirectory();
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    }, () => {
      let latestState = this.state.results;
      let filterList = latestState.filter((item) => {
        //return true for users that match text input
        // tolowercase(), includes() item.name.first item.name.last
        var wholeName = item.name.first + item.name.last;
        return wholeName.toLowerCase().includes(this.state.search)
        //return false for users that dont
      })
      this.setState({
        filteredResults: filterList
      }, () => {
        console.log(this.state.filteredResults)
      })
    });

  };

  handleFormSubmit = event => {
    event.preventDefault();
    // this.loadDirectory(this.state.search);
  };

  render() {
    return (
      <>
        < Container >
          <Header
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit} />
          <Table
            results={this.state.search ? this.state.filteredResults : this.state.results}
          />
        </Container >
      </>
    );
  }
}
export default DirectoryContainer;