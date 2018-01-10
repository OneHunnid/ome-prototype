import React from 'react'
import $ from 'jquery'

class PhoneNumber extends React.Component {
  constructor(props) {
    super(props)
  }
  __maskPhone() {
    $("#phoneNumber").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
        var curchr = this.value.length;
        var curval = $(this).val();
        if (curchr == 3) {
            $(this).val(curval + "-");
        } else if (curchr == 7) {
            $(this).val(curval + "-");
        }
        $(this).attr('maxlength', '12');
    });
  }
  componentDidMount() {
    this.__maskPhone()
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Phone Number</div>
        <div className="form-group__description">Country code is automatically selected</div>
        <div className="row">
          <span className="relative">
            <input placeholder="+1" className="country-code col col-2" id="countryCode" />
            <span id="countryFlag" className="flag flag-icon flag-icon-us"></span>
          </span>
          <input placeholder="555-555-5555" id="phoneNumber" className="col col-3"/>
        </div>
      </div>
    )
  }
}

export default PhoneNumber
