import React from 'react'
import FollowupTable from '../../FollowupTable'
import { useSelector } from 'react-redux'
import { selectAllGrievances } from '../../../grievanceSlice'


const Ongoing = () => {
  const grievances = useSelector(selectAllGrievances)
  console.log(grievances)

  return (
    <FollowupTable data={grievances} />
  )
}

export default Ongoing