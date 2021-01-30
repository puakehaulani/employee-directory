// checked??
import React from "react";
import SearchForm from "./SearchForm";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Click field name to sort or use the search box to narrow your result</p>
            <SearchForm
                value={props.search}
                handleInputChange={props.handleInputChange}
                handleFormSubmit={props.handleFormSubmit}
            />
        </div>

    );
}

export default Header;