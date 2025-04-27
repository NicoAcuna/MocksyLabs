import React, { ChangeEvent, useState } from 'react'

type Props = {
    required?: boolean
    label: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    className?: string
    rows?: number
}

function TextInput({ label, required, value, onChange, className, rows }: Props) {

    const [isFocused, setIsFocused] = useState<boolean>(false)

    if (rows) return <div className='relative'>
        {label && <div className={`absolute outline-none transition-all duration-200 select-none ${isFocused || value ? 'top-[2px] left-1 scale-75 text-purple-base' : ' top-[18px] left-4 text-grey-light'}`}>{label}<span className='pl-1 text-[#F94658]'>*</span></div>}
        <textarea className={'input-primary ' + className} onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)}
            value={value} onChange={onChange} rows={rows}
        />
    </div>

    return <div className='relative'>
        {label && <div className={`absolute outline-none transition-all duration-200 select-none ${isFocused || value ? 'top-[2px] left-1 scale-75 text-purple-base' : ' top-[18px] left-4 text-grey-light'}`}>{label}<span className='pl-1 text-[#F94658]'>*</span></div>}
        <input className={'input-primary ' + className} onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)}
            value={value} onChange={onChange}
        />
    </div>
}

export default TextInput