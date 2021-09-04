import { Component } from "react";
import './style.css'

export class Input extends Component {
  render() {
    const { handleChange, value, placeHolder } = this.props;
    return (
      <div className="input-content">
        {!!value && <h1 htmlFor="">Search value: {value}</h1>}

        <input type="search" value={value} onChange={handleChange} placeholder={placeHolder} />
      </div>
    );
  }
}
