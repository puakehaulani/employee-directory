import React from 'react'

function TableData(props) {
    const employeeData = props.results.map((item) =>
        // {console.log("employee render")}
        < tr key={item.phone}>
            <th scope="row" />
            <td><img src={item.picture.thumbnail} alt="employee" /></td>
            <td>{item.name.first} {item.name.last}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
        </tr >

    )

    return (
        < tbody >
            {console.log("employee render")}
            {employeeData}
        </tbody>
    )
}
export default TableData