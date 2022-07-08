import React from 'react'

interface IButton {
  btnText: string;
}

const Button = ({ btnText }: IButton) => {
  return (
    <button>{btnText}</button>
  )
}

export default Button
