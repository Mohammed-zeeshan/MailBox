import React, { useCallback, useEffect, useState } from 'react'

const Inbox = (props) => {
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
            if (data[key].to === props.mail){
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
    console.log(items)
    setInterval(() => {
        emailsHandler()
      }, 2000)
  return (
    <div className='p-2 border-bottom'>
        {items.map((data) => (
            <label>{data.from} {data.subject}</label>
        ))}
    </div>
  )
}

export default Inbox
