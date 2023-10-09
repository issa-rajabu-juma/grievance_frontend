import React from 'react'
import FollowupTable from '../../FollowupTable'
import { useSelector } from 'react-redux'
import { selectAllGrievances } from '../../../../grievance/grievanceSlice'


const Open = () => {
  const grievances = useSelector(selectAllGrievances)

  return (
    <FollowupTable data={grievances} />
  )
}

export default Open