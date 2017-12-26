import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { addCount } from '../store'

class AddressComponent extends React.Component {
  constructor(props) {
    super(props)
    // this.__addNewAddress = this.__addNewAddress.bind(this)
    // this.__handleChosenAddress = this.__handleChosenAddress.bind(this)
  }
  __addNewAddress() {

  }
  __handleChosenAddress(e) {
    e.preventDefault();
    console.log('I WAS CLICKED')
    const currentTarget = e.currentTarget
    console.log('currentTarget', currentTarget)
    const optionsArray = Array.prototype.slice.call(document.querySelectorAll(".js-address-option"));

    optionsArray.forEach(function(option) {
      option.classList.remove('selected')
    })

    currentTarget.classList.toggle('selected')
  }
  render () {
    const { title, description, residenceAddress } = this.props
    console.log('AddAddress Component', this.props )
    return (
      <div className="form-group">
        <div className="form-group__label">{title}</div>
        <div className="form-group__description">{description}</div>
        <div className="row">
          <div className="js-address-option-group">
            <AddressOption address={residenceAddress} handleClick={this.__handleChosenAddress.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className="button-add">+ Add Address</div>
        </div>
      </div>
    )
  }
}

class AddressOption extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const { address } = this.props
    console.log('AddressOption Component', this.props)

    return (
      <div className="row">
        <div className="button button--option col col-8 js-address-option" onClick={this.props.handleClick.bind(this)}>
          <span className="option-label">{address.type}</span><span className="option-desc">{address.addressOne}, {address.addressTwo}, {address.city}, {address.state}, {address.zip}</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ residenceAddress }) => ({ residenceAddress })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCount: bindActionCreators(addCount, dispatch)
//   }
// }

export default connect(mapStateToProps, null)(AddressComponent)
