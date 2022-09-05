import { Component } from 'react';

class BadgeForm extends Component {
  render() {
    return(
      <div>
        <h1>Crear Card</h1>
        <form>
          <div className="form-group">
            <label>Primer Nombre</label>
            <input onChange={this.props.handleChange} type="text" className="form-control" name="firstName"/>
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input onChange={this.props.handleChange} type="text" className="form-control" name="lastName"/>
          </div>
          <div className="form-group">
            <label>Username</label>
            <input onChange={this.props.handleChange} type="text" className="form-control" name="username"/>
          </div>
          <div className="form-group">
            <label>JobTitle</label>
            <input onChange={this.props.handleChange} type="text" className="form-control" name="jobTitle"/>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm