import React from 'react'
import TableData from "./TableData"

function Table(props) {

    return (
        <table className="table">
            {console.log("table" + props)}
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <TableData
                results={props.results} key={props.phone}
            />
        </table>
    )
}
export default Table