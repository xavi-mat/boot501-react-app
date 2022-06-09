import React from 'react'

const PersonFunc = (props) => {
  return (
    <div>
        Name: <span className='lead'>{props.name} </span>
        Surname: <span className='lead'>{props.surname} </span>
        Age: <span className='small'>{props.age} </span>
    </div>
  )
}

export default PersonFunc