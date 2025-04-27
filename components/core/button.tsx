import React, { ReactNode } from 'react'

type Props = {
    text: string
    onClick: () => void
    className?: string
    icon?: ReactNode
}

function Button({ text, onClick, className, icon }: Props) {
    return (
        <button onClick={onClick} className={`btn-primary group ` + className}>
            {text}
            {icon && <i className='group-hover:translate-x-2 duration-300'>{icon}</i>}
        </button>
    )
}

export default Button
