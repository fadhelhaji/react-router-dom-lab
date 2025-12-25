import { Route, Routes } from 'react-router'
import MailboxList from './MailboxList'
import Navbar from './Navbar'
function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/mailboxes' element={<MailboxList />} />
    </Routes>
    
    </>
  )
}

export default App