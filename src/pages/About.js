import { useDispatch } from 'react-redux'
import { logout } from '../store/user'

export default function About() {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}
