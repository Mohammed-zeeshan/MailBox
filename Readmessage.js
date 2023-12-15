import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Readmessage = () => {
    const params = useParams();
  return (
    <section>
        <div>
            <h3 className='p-3'>{params.messagesubject}</h3>
        </div>
        <div className='p-3' >
            <p>{params.messagemail}</p>
        </div>
    </section>
  )
}

export default Readmessage
