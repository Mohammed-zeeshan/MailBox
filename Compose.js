import React, { useRef } from 'react'
import TextEditor from './TextEditor'

const Compose = () => {
    const toInputRef = useRef();
    const subjectInputRef = useRef();
    const mailInputRef = useRef();
    const sendHandler = (event) => {
        event.preventDefault();
        const enteredTO = toInputRef.current.value;
        const enteredSubject = subjectInputRef.current.value;
        const enteredMail = mailInputRef.current.value;
        const data = {
            to: enteredTO,
            subject: enteredSubject,
            mail: enteredMail,
        }
        fetch('https://mailbox-dc43d-default-rtdb.firebaseio.com/Mail.json',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            if (res.ok) {
                console.log(res.data);
            }
        }).catch((err) => {
            alert(err.message)
        })
    }
  return (
    <section>
        <form onClick={sendHandler}>
            <div>
                <label>To</label>
                <input type='text' className='form-control' ref={toInputRef} required />
            </div>
            <div>
                <input type='text' className='form-control' placeholder='Subject' ref={subjectInputRef} required />
            </div>
            <div>
                <textarea className='form-control' placeholder='Compose email' ref={mailInputRef} rows={18} required></textarea>
            </div>
            <div style={{flexDirection: 'row'}}>
                <button className='btn btn-primary'>Send</button>
                <TextEditor />
            </div>
        </form>
    </section>
  )
}

export default Compose
