import { Component } from "react"
import './style.css'

export class Button extends Component {
  render () {
    const {onClick, text, disabled} = this.props
    return (
      <button disabled={disabled} className="button" onClick={onClick}>{text}</button>
    )
  }
}