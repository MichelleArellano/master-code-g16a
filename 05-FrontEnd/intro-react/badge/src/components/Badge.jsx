import React from 'react';
import '../styles/Badge.css';
import logo from '../images/devf-white.png'

class Badge extends React.Component {
  render() {
    // console.log(this.props)

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logo} alt="DevF" />
        </div>
        <div className="Badge__section-name">
          <img src="https://www.gravatar.com/avatar?d=identicon" className="Badge__avatar" alt="Avatar" />
          <h1>
            {this.props.state.form.firstName} <br/>
            {this.props.state.form.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.state.form.jobTitle}</h3>
          <div>@ {this.props.state.form.username}</div>
        </div>
        <div className="Badge__footer">#DevF</div>
      </div>
    )
  }

}

export default Badge;