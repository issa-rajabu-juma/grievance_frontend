import React from 'react'
import FollowupTable from '../src/features/grievance/components/FollowupTable'
import { useSelector } from 'react-redux'
import { selectAllGrievances } from '../src/features/grievance/grievanceSlice'


const FaqList = () => {
  const grievances = useSelector(selectAllGrievances)

  return (
    <>
     
    </>
  )
}

export default FaqList