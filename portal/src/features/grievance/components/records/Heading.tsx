import React from 'react'

const Heading = (props: any) => {
  return (
    <div className="row">
            <div className="col-12 text-center">

              <h3 className="mb-10">{props.heading}</h3>

            </div>
          </div>
  )
}

export default Heading