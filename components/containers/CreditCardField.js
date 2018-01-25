import React from 'react'
import Cleave from 'cleave.js/react';

class CreditCardField extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dateRawValue: ''
    };

    this.onDateChange = this.onDateChange.bind(this);
  }
  onDateChange(event) {
      this.setState({dateRawValue: event.target.rawValue});
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Pay with Card</div>
        <div className="form-group__description ">Please enter the details of the credit card you will be using</div>
        <div className="row">
          <input className="col col-12 js-card-name" placeholder="Name" />
        </div>
        <div className="row">
          <input className="col col-12 js-card-number" placeholder="Card Number" />
        </div>
        <div className="row">
          <Cleave className="col col-6 js-card-exp" placeholder="MM/YY" options={{date: true, datePattern: ['m', 'y']}} onChange={this.onDateChange}/>
          <input className="col col-6 js-card-cvc" placeholder="CVC" />
        </div>
      </div>
    )
  }
}

export default CreditCardField
