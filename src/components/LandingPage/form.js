import React, {Component} from 'react'

import styled from 'styled-components';

const Signup = styled.div`
text-align: center;
button {
  background-color: #323232;
  border-radius: 5px;
    border: none;
    color: white;
    padding: 10px 25px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
}
button:hover {
  background-color: #694a8c;
    
}

}

`

class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <Signup>
        <form onSubmit={this.handleSubmit}action="https://www.getdrip.com/forms/270040280/submissions" method="post" data-drip-embedded-form="270040280">
          <div>
            <input type="email" name="fields[email]" value={this.state.value} onChange={this.handleChange} placeholder="Your Email" />
          </div>
          <div>
            <button type="submit" name="submit" value="Teach me! 💌" data-drip-attribute="sign-up-button">Teach me! 💌</button>
          </div>
        </form>
        </Signup>
      );
    }
  }

  export default NameForm
  