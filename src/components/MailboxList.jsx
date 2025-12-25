import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

function MailboxList() {
    const [mail, setMail] = useState([])
    async function getMail() {
        try {
            const allMail = await axios.get(import.meta.env.VITE_API_URL)
            // console.log(allMail.data);
            setMail(allMail.data)
        } catch (error) {
            console.log(error);    
        }
    }
    useEffect(()=>{getMail()}, [])
  return (
    <div>
        {mail.map((oneLetter)=>{
            return (
                <>
                <h3>Owner: {oneLetter.owner} | Size: {oneLetter.size}</h3>
                <Link to={`/mailboxes/${oneLetter._id}`}>See mail details</Link>        
                </>
            )
        })}
    </div>
  )
}

export default MailboxList