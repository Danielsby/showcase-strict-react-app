import React, { useState } from 'react'
import Button from './Button'

const ComponentContainer = () => {
  // STATE
  const [btnText, setBtnText] = useState('Nothing inserted yet')

  // REST API
  // Redux (if necessary)

  return (
    <>
      <input onChange={(e) => setBtnText(e.target.value)}/>
      <Button btnText={btnText} />
    </>
  )
}

export default ComponentContainer
