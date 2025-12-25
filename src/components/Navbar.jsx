import { Link } from 'react-router'
function Navbar() {
  return (
    <div>
        <button><Link to='/mailboxes' >Go to all Mails</Link></button>
    </div>
  )
}

export default Navbar