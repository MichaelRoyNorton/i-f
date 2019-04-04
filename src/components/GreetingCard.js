import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class GreetingCard extends Component {
  render() {
    return (
      <div className="inner">
        <div className="greeting-section">
          <div className="grid-container-half grid-container-1-md">
            <div className="greeting-area">
              <h3>Occasion: {this.props.location.state.occasion.label}</h3>
              <div className="greeting-output">
                <p>{this.props.location.state.message}</p>
              </div>
            </div>
            <div className="grid-container">
              <Link to="/combinations">
                <button onClick={(e) => {this.props.save(this.props.location.state.message, this.props.location.state.occasion.label)}}className="btn-primary">Save Combination</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GreetingCard
