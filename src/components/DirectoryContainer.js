import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import search from "../utils/API";
import Header from "./Header";

class DirectoryContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  searchDirectory = () => {
    search()
      .then(res => this.setState({ result: res.data.result }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.searchDirectory();

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
    // this.searchDirectory(this.state.search);
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
              {/* change below from friend to applicable state info */}
              {/* {this.state.employees.map(employee => (
                <EmployeeDetail
                  //have below match employeedetail props
                  name={employee.name}
                  image={employee.image}
                  phone={employee.phone}
                  email={employee.email}
                  dob={employee.dob}
                />
              ))} */}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DirectoryContainer;
