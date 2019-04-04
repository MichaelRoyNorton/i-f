import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Combinations extends Component {
  render() {
    return (
      <div className="inner">
        <div className="greeting-section">
          <h2>Your Greeting Card Combinations</h2>
          {this.props.combinations.length > 0 ?
            <div className="grid-container-half grid-container-1-md">
              {this.props.combinations.map((item, key) =>
                <div key={key} className="greeting-area">
                  <h3>Occasion: {item.label}</h3>
                  <div className="greeting-output">
                    <p>{item.message}</p>
                  </div>
                </div>
              )}
            </div>
            :
            <p>You do not have any saved greeting card combinations, go to <Link to="/">Create Greeting Card</Link> to create your first combination</p>
          }
        </div>
      </div>
    )
  }
}

export default Combinations
