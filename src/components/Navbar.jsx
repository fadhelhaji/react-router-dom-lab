import { Link } from 'react-router'
function Navbar() {
  return (
    <div>
        <button><Link className='title' to='/mailboxes' >Go to all Mails</Link></button>
        <button><Link className='title' to='/mailboxes/new-mailbox' >Create Mail</Link></button>
        <button><Link className='title' to='/' >Home</Link></button>
    </div>
  )
}

export default Navbar