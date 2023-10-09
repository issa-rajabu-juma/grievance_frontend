import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = (props: any) => {

    const { title } = props
  return (
    <>
     <nav className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">

            <ol className="breadcrumb mb-0 fs-xs text-gray-400">
              <li className="breadcrumb-item">
                <Link className="text-gray-400" to="/">Cover</Link>
              </li>
              <li className="breadcrumb-item active">
                {title}
              </li>
            </ol>

          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Breadcrumb