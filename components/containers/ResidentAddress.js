import React from 'react'

class ResidentAddress extends React.Component {
  constructor(props) {
    super(props)
  }
  __captureAddress(e) {
    e.preventDefault();
    const type = 'Residence'
    const country = $('#residenceAddressCountry').val()
    const addressOne = $('#residenceAddressAddressOne').val()
    const addressTwo = $('#residenceAddressAddressTwo').val()
    const zip = $('#residenceAddressZip').val()
    const city = $('#residenceAddressCity').val()
    const state = $('#residenceAddressState').val()

    let residenceAddressObj = {
      'type': type,
      'country': country,
      'addressOne': addressOne,
      'addressTwo': addressTwo,
      'zip': zip,
      'city': city,
      'state': state
    }

    this.setState({ residenceAddressObj })

    // This should be in the phone number component
    // if (country === 'USA') {
    //   $('#countryCode').val('+1')
    //   $('#countryFlag').removeClass('flag-icon-gb')
    //   $('#countryFlag').addClass('flag-icon-us')
    // } else if (country === 'UK') {
    //   $('#countryCode').val('+44')
    //   $('#countryFlag').removeClass('flag-icon-us')
    //   $('#countryFlag').addClass('flag-icon-gb')
    // }
  }
  render() {
    return (
      <div className="form-group" onChange={this.__captureAddress} >
        <div className="form-group__label">Resident Address</div>
        <div className="form-group__description">Address of primary residence.</div>
        <div className="row">
          <div className="row">
            <select className="col col-9" id="residenceAddressCountry" >
              <option value="placeholder" selected disabled>Country or Territory</option>
              <option value="USA">United States of America</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
          <div className="row">
            <input className="col col-9" placeholder="Address" id="residenceAddressAddressOne"/>
          </div>
          <div className="row">
            <input className="col col-9" placeholder="Floor, Apartment, Suite, etc" id="residenceAddressAddressTwo"/>
          </div>
          <div className="row">
            <input className="col col-2" placeholder="ZIP" type="number" id="residenceAddressZip"/>
            <input className="col col-4" placeholder="City" id="residenceAddressCity"/>
            <input className="col col-3" placeholder="State" id="residenceAddressState"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ResidentAddress
