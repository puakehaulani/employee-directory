import React from "react";
import Col from "./Col";

function EmployeeDetail(props) {
  return (
    <div className="list-group list-group-horizontal">

      {/* enter in employee specific info */}
      <Col size="md">
        <h4>Image</h4>
          imagehere{props.image}
      </Col>

      <Col size="md">
        <h4>Name</h4>
          namehere{props.name}
      </Col>

      <Col size="md">
        <h4>Phone</h4>
          phonehere{props.phone}
      </Col>

      <Col size="md">
        <h4>Email</h4>
          emailhere{props.email}
      </Col>

      <Col size="md">
        <h4>DOB</h4>
          dobhere{props.dob}
      </Col>

    </div>
  );
}

export default EmployeeDetail;