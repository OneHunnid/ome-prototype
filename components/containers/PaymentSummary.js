import React from 'react'

class PaymentSummary extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="summary-block">
        <div className="summary-block-title">Payment Summary</div>
        <div className="summary-block-body">
          <div className="summary-block-body-row">
            <div className="summary-block-body-row-label">Processing Fee</div>
            <div className="summary-block-body-row-price">$50</div>
          </div>
        </div>
        <div className="summary-block-bottom">
          <div className="summary-block-bottom-label">Total<span className="summary-block-bottom-currency">USD</span></div>
          <div className="summary-block-bottom-price">$50</div>
        </div>
      </div>
    )
  }
}

export default PaymentSummary
