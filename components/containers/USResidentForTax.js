import React from 'react'

class USResidentForTax extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Are you a U.S. resident for tax purposes?</div>
        <div className="form-group__description">Non-U.S. residents will need to be asked to provide a W8.</div>
        <div className="row">
          <label className="radio">
            <input className="radio__icon" type="radio" name="resident"/> Yes, I am a U.S Citizen
          </label>
          <label className="radio">
            <input className="radio__icon" type="radio" name="resident"/> No, I am not a U.S. Citizen
          </label>
        </div>
      </div>
    )
  }
}

export default USResidentForTax
