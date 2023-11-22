import React from 'react'
import FollowupTable from '../src/features/grievance/components/FollowupTable'
import { useSelector } from 'react-redux'
import { selectAllGrievances } from '../src/features/grievance/grievanceSlice'


const Ongoing = () => {
  const grievances = useSelector(selectAllGrievances)
  console.log(grievances)

  return (
    // <FollowupTable data={grievances} />
    <></>
  )
}

export default Ongoing