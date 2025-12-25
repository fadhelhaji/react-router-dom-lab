import { Route, Routes } from 'react-router'
import MailboxDetails from './MailboxDetails'
import MailboxList from './MailboxList'
import Navbar from './Navbar'
function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/mailboxes' element={<MailboxList />} />
        <Route path='/mailboxes/:id' element={<MailboxDetails />} />
    </Routes>
    
    </>
  )
}

export default App