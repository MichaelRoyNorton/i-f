import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }

    this.closeNav = this.closeNav.bind(this)
    this.openNav = this.openNav.bind(this)
  }

  closeNav() {
    this.setState({
      show: false
    })
  }

  openNav() {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <header className="header">
        <div className="inner">
          <Link to="/"><img className="logo" alt="Interflora Logo" src={require("../assets/images/interflora.svg")}/></Link>
          <div className="nav">
            <Link className="nav-item" to="/">Create Greeting Card</Link>
            <Link className="nav-item" to="/combinations">Combinations</Link>
          </div>
          <div onClick={this.openNav} className="burger"><i className="fas fa-bars"></i></div>
          {this.state.show ?
            <div>
              <div onClick={this.closeNav} className="mobile-overlay">
              </div>
              <div className="mobile-nav">
                <div className="side-bar">
                  <div className="close" onClick={this.closeNav}>Close Menu</div>
                  <div className="items">
                    <Link className="nav-item" to="/">Create Greeting Card</Link>
                    <Link className="nav-item" to="/combinations">Combinations</Link>
                  </div>
                </div>
              </div>
            </div>
            : null
          }

        </div>
      </header>
    )
  }
}
export default Header;
