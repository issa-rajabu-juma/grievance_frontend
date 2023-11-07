import Helmet from 'react-helmet'
import React from 'react'

const Meta = (props: any) => {
  return (
    <Helmet>
        <title>{ props.title }</title>
    </Helmet>
  )
}

export default Meta