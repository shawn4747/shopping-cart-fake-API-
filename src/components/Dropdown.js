import React, { Component } from "react";
import "./css/Dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "$",
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <select
              id="dropdown"
              selectValue={this.selectValue}
              onChange={this.handleDropdownChange}
            >
              <option className="option" value="N/A">
                $ USD
              </option>
              <option className="option" value="2">
                € EUR
              </option>
              <option className="option" value="3">
                ¥ JPY
              </option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default Dropdown;
