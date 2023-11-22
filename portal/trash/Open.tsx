import React from 'react'
import FollowupTable from '../src/features/grievance/components/FollowupTable'
import { 
  selectAllGrievances, 
  selectGrievanceStatus, 
  selectGrievanceError,
  fetchGrievances 
} from '../src/features/grievance/grievanceSlice'
import { 
  useAppDispatch, 
  useAppSelector 
} from '../src/app/hooks'
import { useEffect } from 'react'

const Open = () => {
  const dispatch = useAppDispatch()

  const grievances = useAppSelector(selectAllGrievances)
  const status = useAppSelector(selectGrievanceStatus)
 

  let content

  if (status === 'loading') {
    content = <p>'Loading...'</p>
  }else if (status === 'succeeded') {
    content = <FollowupTable />
  }else if (status === 'failed') {
    content = <p>error</p>
  }

  return (
    <>
      {content}
    </>
  )
}

export default Open