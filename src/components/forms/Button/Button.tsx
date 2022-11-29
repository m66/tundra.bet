import React from 'react'

interface Props {
    children: any,
    ownStyle: any
}

const Button:React.FC<Props> = ({ownStyle, children}) => {
  return (
    <button className={`ts-button ts-primary-button large ${ownStyle}`}>
        {children}
    </button>
  )
}

export default Button