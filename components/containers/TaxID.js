import React from 'react'
import $ from 'jquery'

class TaxID extends React.Component {
  constructor(props) {
    super(props)
  }
  __replaceSSN() {
    $('.ssn-value').on('keydown keyup mousedown mouseup', function() {
       	 var res = this.value, //grabs the value
       		 len = res.length, //grabs the length
       		 max = 9, //sets a max chars
       		 stars = len>0?len>1?len>2?len>3?len>4?'*****':'****':'***':'**':'*':'', //this provides the masking and formatting
       		result = stars+res.substring(5); //this is the result
       	 $(this).attr('maxlength', max); //setting the max length
       	$(".ssn-number").val(result); //spits the value into the input
       });
  }
  componentDidMount() {
    this.__replaceSSN()
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Tax ID</div>
        <div className="form-group__description">Please enter your SSN or ITIN</div>
        <div className="row num">
          <input placeholder="*********"  className="col col-6 ssn-number"/>
          <input className="col col-6 ssn-value" />
        </div>
      </div>
    )
  }
}

export default TaxID
