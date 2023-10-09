import React from 'react'
import NavBarTop from '../components/NavBarTop'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import FaqMain from '../features/grievance/components/records/pages/FaqList'
import FaqList from '../features/grievance/components/records/pages/FaqList'

const Faq = () => {
  return (
    <>

        <NavBarLast />
        <Breadcrumb title='Faq' />
        <section className="pt-7 pb-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">

            
            <h3 className="mb-10 text-center">Frequently Asked Questionss</h3>

            <FaqList />
            <FaqList />
            <FaqList />

          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Faq