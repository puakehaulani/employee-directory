import React from 'react'

function TableData(props) {
    const employeeData = props.results.map((item) => {
        console.log("employee");
        < tr >
            <th scope="row">1</th>
            <td><img src={item.picture} /></td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.dob}</td>
        </tr >
    })

    return (
        < tbody >
            {console.log("employee render")}
            {employeeData}
        </tbody>
    )
}
export default TableData