import { useDispatch, useSelector } from 'react-redux';
import { allUser } from '../../../Redux/actions/user'
import { useEffect } from 'react';
const RecentBooking = () => {
  const { users } = useSelector(state=> state.users)
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(allUser())
  }, [dispatch]);
  return (
    <div className=''>
        <table className='user-table-container'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
              <th>Address</th>
              <th>NID</th>
              <th>Role</th>
            </tr>
            {
                users?.map(user=>
                    <tr key={user._id}>
                    <td>{user?.firstName + user?.lastName}</td>
                    <td>{user?.email}</td>
                    <td>{user?.phone ? user?.phone : "No Data Found"}</td>
                    <td>{user?.address ? user?.address : "No Data Found"}</td>
                    <td>{user?.nid ? user?.nid : "No Data Found"}</td>
                    <td className='capitalize'>{user?.role}</td>
                    </tr>
                )
            }
        </table>
    </div>
  )
}

export default RecentBooking