import React from 'react'
import FollowupTable from '../src/features/grievance/components/FollowupTable'
import { useSelector } from 'react-redux'
import { selectAllGrievances } from '../src/features/grievance/grievanceSlice'


const Closure = () => {
  const grievances = useSelector(selectAllGrievances)

  return (
    <FollowupTable data={grievances} />
  )
}

export default Closure