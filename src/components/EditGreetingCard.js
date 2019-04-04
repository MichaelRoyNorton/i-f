import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CreatableSelect from 'react-select/lib/Creatable';

class EditGreetingCard extends Component {
  constructor() {
    super()

    this.state = {
      characters: 0,
      lines: 0,
      message: '',
      messageSaved: false,
    }

    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
    this.checkLines = this.checkLines.bind(this)

  }

  handleMessageChange(e) {
    this.setState({
      characters: e.target.value.length,
      lines: (e.target.value.match(/\n/g) || []).length + 1,
      message: e.target.value
    })
  }


  handleMessage(e) {
    e.preventDefault()
    this.setState({
      messageSaved: true
    })
  }

  checkLines(e) {
    if(e.charCode === 13 && this.state.lines === 12) { e.preventDefault() }
  }


  render () {

    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        border: state.isFocused ? '0 solid #4f4daa' : 'none',
        outline: state.isFocused ? '1px solid #4f4daa' : 'none',
        backgroundColor: state.isFocused ? '#ececec' : '#f8f8f8'
      }),
      input: (provided) => ({
        ...provided,
        fontSize: '18px'
      }),
      option: (provided) => ({
        ...provided,
        fontSize: '18px'
      }),
      singleValue: (provided) => ({
        ...provided,
        fontSize: '18px'
      })
    }
    return (
      <div className="inner">
        <div className="greeting-section">
          <h2>Customise your Greeting Card</h2>
          <div className="grid-container-2 grid-container-2-md">
            <form onSubmit={this.handleMessage} className="greeting-area">
              <h3>Write your Message</h3>
              <div className="greeting-input">
                <textarea maxLength="480" placeholder="Write your personalised greeting here" onChange={this.handleMessageChange} onKeyPress={this.checkLines}></textarea>
              </div>
              <div className="grid-container-3 grid-container-3-sm">
                <p>{this.state.characters}/480 characters</p>
                <p>{this.state.lines}/12 lines</p>
                <button className="btn-primary">Save message</button>
              </div>
            </form>
            <div className="category-area">
              <h3>Select an Occasion</h3>
              {this.state.messageSaved ?
                null
                 :
                 <p>Please write and save your personalised greeting to select an occasion</p>
               }
              <div className="grid-container">
                <CreatableSelect
                  isClearable
                  value={this.props.selectedOccasion}
                  onChange={this.props.handleOccasionChange}
                  onCreateOption={this.props.handleCreate}
                  options={this.props.occasions}
                  isDisabled={!this.state.messageSaved}
                  styles={customStyles}
                />
              <Link to={{pathname: '/greeting-card', state: {message: this.state.message, occasion: this.props.selectedOccasion}}}>
                <button disabled={!this.state.messageSaved || this.props.selectedOccasion === undefined} onClick={this.props.resetValue} className={this.state.messageSaved && this.props.selectedOccasion !== undefined ? "btn-primary" : "btn-primary btn-disabled"}>Add category</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default EditGreetingCard
