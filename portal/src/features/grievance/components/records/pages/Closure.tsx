import React from 'react'
import FollowupTable from '../../FollowupTable'
import { useSelector } from 'react-redux'
import { selectAllGrievances } from '../../../grievanceSlice'


const Closure = () => {
  const grievances = useSelector(selectAllGrievances)

  return (
    <FollowupTable data={grievances} />
  )
}

export default Closure