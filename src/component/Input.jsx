import React from 'react';

const Input=({
    name,
    labelname,
    type='text',
    variant='peimary',
    className='',
    ...props
})=>{
    const baseStyle='px-4 py-2 rounded-full font-normal text-[var(--color-text)]'

    const variants={
        peimary:'border-1 border-[var(--color-text)] bg-[var(--color-background)] rounded-full w-100',
        outline:'bg-red-700'
    }

    return(

        <div >
            <label htmlFor={labelname} className='px-3 font-black text-[32px]'>{name}</label>
            <input type={type} name={labelname} className={`${baseStyle} ${variants[variant]} ${className} `} />
        </div>
    )
}

export default Input;