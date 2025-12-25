import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function MailboxDetails() {
    const [mail, setMail] = useState(null)
    const {id} = useParams()
    async function mailDetails() {
        try {
            const mailInfo = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
            setMail(mailInfo.data)         
        } catch (error) {
            console.log(error); 
        }
    }
    useEffect(()=>{mailDetails()}, [])
  return (
    <div>
        {mail ? (<>
        <h2>Details</h2>
        <p>Owner: {mail.owner}</p>
        <p>Size: {mail.size}</p>
        </>) : <h2>Please wait...</h2>}
    </div>
  )
}

export default MailboxDetails