import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function MailboxForm() {
    const navigate = useNavigate()
    const [newMail, setNewMail] = useState({
        owner: '',
        size: ''
    })
    async function handleSubmit(event) {
        try {
            event.preventDefault()
            const createMail = await axios.post(import.meta.env.VITE_API_URL, newMail)
            navigate('/mailboxes')
        } catch (error) {
            console.log(error); 
        }
    }
    async function handleChange(event) {
        try {
            setNewMail({...newMail, [event.target.name] : event.target.value})
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{handleChange}, [])
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label htmlFor="owner">Mail Owner</label>
            <input onChange={handleChange} value={newMail.owner} name='owner' id='owner' type="text" />

            <label htmlFor="size">Mail Size</label>
            <select onChange={handleChange} value={newMail.size} name='size' id='size' type="text">
                <option value="">Select Size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
            <button>Create New Mail</button>
        </form>
    </div>
  )
}

export default MailboxForm