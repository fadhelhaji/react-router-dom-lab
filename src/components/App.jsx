import { Route, Routes } from 'react-router'
import MailboxDetails from './MailboxDetails'
import MailboxForm from './MailboxForm'
import MailboxList from './MailboxList'
import Navbar from './Navbar'
import PostOffice from './PostOffice'
function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<PostOffice />} />
        <Route path='/mailboxes' element={<MailboxList />} />
        <Route path='/mailboxes/:id' element={<MailboxDetails />} />
        <Route path='/mailboxes/new-mailbox' element={<MailboxForm />} />
    </Routes>
    
    </>
  )
}

export default App