import React from 'react'

const Footer = () => {
  return (
    <>
       
        <footer className="bg-dark bg-cover " style={{backgroundImage: 'url(assets/img/patterns/pattern-2.svg)'}}>
        
          <div className="py-6">
            <div className="container">
              <div className="row">
                <div className="col">
        
                  <p className="mb-3 mb-md-0 fs-xxs text-muted">
                    © 2019 All rights reserved. Designed by Unvab.
                  </p>
        
                </div>
                <div className="col-auto">
        
                  <img className="footer-payment" src="assets/img/payment/mastercard.svg" alt="..." />
                  <img className="footer-payment" src="assets/img/payment/visa.svg" alt="..." />
                  <img className="footer-payment" src="assets/img/payment/amex.svg" alt="..." />
                  <img className="footer-payment" src="assets/img/payment/paypal.svg" alt="..." />
                  <img className="footer-payment" src="assets/img/payment/maestro.svg" alt="..." />
                  <img className="footer-payment" src="assets/img/payment/klarna.svg" alt="..." />
        
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer