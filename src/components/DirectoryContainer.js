import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";
import Header from "./Header";

class DirectoryContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  searchDirectory = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    // this.searchDirectory("");
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
    this.searchDirectory(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card>
              <Header />
              <Col size="md-4">
                <SearchForm
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
              </Col>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md">
            <Card
              heading="Employees"
            >
              <EmployeeDetail
              // match this section to the EmployeeDetail component
              // title={this.state.result.Title}
              // src={this.state.result.Poster}
              // director={this.state.result.Director}
              // genre={this.state.result.Genre}
              // released={this.state.result.Released}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DirectoryContainer;
