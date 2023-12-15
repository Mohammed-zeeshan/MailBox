import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const SendMail = (props) => {
    const [items, setItems] = useState([]);
    const emailsHandler = useCallback(async() => {
        try {
            const response = await fetch('https://mailbox-dc43d-default-rtdb.firebaseio.com/Mail.json')
        if (!response.ok){
            throw new Error('Something went wrong'); 
        }
        const data = await response.json();
        const loadedItems = [];
        for (const key in data) {
            console.log(data[key].to)
            if (data[key].from === props.mail){
                loadedItems.push({
                    id: key,
                    from: data[key].from,
                    subject: data[key].subject,
                    mail: data[key].mail,
                    to: data[key].to,
                })
            }
        }
        setItems(loadedItems);
        }
        catch(err) {
            console.log(err.message);
        }
    }, [props.mail])
    useEffect(() => {
        emailsHandler();
    }, [emailsHandler])
  return (
    <div className='p-2 border-bottom'>
        {items.map((data) => (
            <div key={data.id}><NavLink className='btn' to={`Read/${data.id}`}>
              {data.to} {data.subject} {data.mail}
            </NavLink></div>
        ))}
    </div>
  )
}

export default SendMail
