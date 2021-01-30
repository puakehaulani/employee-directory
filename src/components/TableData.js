import React from 'react'

function TableData(props) {
    const employeeData = props.results.map((item) =>
        < tr key={item.phone}>
            <td><img src={item.picture.thumbnail} alt="{item.name.first}{item.name.last}" /></td>
            <td>{item.name.first} {item.name.last}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
        </tr >
    )
    return (
        <tbody>
            {employeeData}
        </tbody>
    )
}
export default TableData