import React from 'react'

const Cart = () => {
  return (
    <>
        <div className="offcanvas offcanvas-end" id="modalShoppingCart" tabIndex={-1} role="dialog" aria-hidden="true">
        
          
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true"></i>
          </button>
        
          <div className="offcanvas-header lh-fixed fs-lg">
            <strong className="mx-auto">Communication Panel</strong>
          </div>
        
          <ul className="list-group list-group-lg list-group-flush">
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-4">
        
                  
                     <div className="avatar avatar-xxl">
                      <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>
                    
                  
        
                </div>
                <div className="col-8">
        
                   <p className="fs-sm fw-bold mb-6">
                    Sijapata maelezo ya kutosha kwenye majibu yako tafadhari eleza kwa mapana.
                  </p>
               
        
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row align-items-center">
               
                <div className="col-8">
        
                  <p className="fs-sm fw-bold mb-6">
                    Sijapata maelezo ya kutosha kwenye majibu yako tafadhari eleza kwa mapana.
                  </p>
                  <p className="fs-xs text-gray-400 ms-auto">
                   Administrator
                </p>
        
                 
        
                </div>

                 <div className="col-4">
        
                  
                    <div className="avatar avatar-xxl">
                      <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>
                  
        
                </div>
              </div>
            </li>
          </ul>
        
          
          <div className="offcanvas-footer justify-between lh-fixed fs-sm bg-light mt-auto">
            <textarea  className="form-control form-control-sm" id="description"  name="description" rows={4} cols={50} placeholder='Your message here...'></textarea>
          </div>
        
          <div className="offcanvas-body">
            <a className="btn w-100 btn-dark" href="checkout.html">Send</a>
          </div>
       
        
        </div> 
    </>
  )
}

export default Cart