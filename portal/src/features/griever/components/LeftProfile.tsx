import React from 'react'

const LeftProfile = () => {
  return (
    <aside className="mb-9 mb-md-0">

              
              <h6 className="mb-6">
                <i className="fe fe-phone text-primary me-4"></i> Personal Info:
              </h6>
              
              <p className="text-gray-500">
                Please confirm your personal Information for correctness.
              </p>
              <p className='mb-3'>
                <strong>Full Name:</strong><br />
                <a className="text-gray-500" href="#">Issa Rajabu Juma</a>
              </p>
              <p className="mb-3">
                <strong>Gender:</strong><br />
                <a className="text-gray-500" href="#">Male</a>
              </p>

               <p className="mb-3">
                <strong>Age:</strong><br />
                <a className="text-gray-500" href="#">29 Years Old</a>
              </p>
              <hr />

              
              <h6 className="mb-6">
                <i className="fe fe-mail text-primary me-4"></i> Contact Info:
              </h6>

              
              <p className="text-gray-500">
                The contact can be made anytime within 24 hours.
              </p>
              <p className="mb-3">
                <strong>Mobile No:</strong><br />
                <a className="text-gray-500" href="#">+255 678 111 222</a>
              </p>
              <p className="mb-3">
                <strong>Email Address:</strong><br />
                <a className="text-gray-500" href="mailto:careers@example.com">careers@example.com</a>
              </p>

            </aside>
  )
}

export default LeftProfile