import React from 'react'
import FollowupTable from '../../FollowupTable'
import { 
  selectAllGrievances, 
  selectGrievanceStatus, 
  selectGrievanceError,
  fetchGrievances 
} from '../../../../grievance/grievanceSlice'
import { 
  useAppDispatch, 
  useAppSelector 
} from '../../../../../app/hooks'
import { useEffect } from 'react'

const Open = () => {
  const dispatch = useAppDispatch()

  const grievances = useAppSelector(selectAllGrievances)
  const status = useAppSelector(selectGrievanceStatus)
  const error = useAppSelector(selectGrievanceError)
  console.log(grievances)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchGrievances())
    }
  }, [status, dispatch])

  console.log(status)
  let content

  if (status === 'loading') {
    content = <p>'Loading...'</p>
  }else if (status === 'succeeded') {
    content = <FollowupTable data={grievances} />
  }else if (status === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <>
      {content}
    </>
  )
}

export default Open