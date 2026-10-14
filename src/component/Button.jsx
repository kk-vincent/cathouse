import React from 'react';

const Button=({
    children,
    onClick,
    variant='primary',
    className='',
    ...props
})=>{
    const baseStyle='flex px-4 pt-2 text-center rounded font-bold';

    const variants={
        primary:'bg-[var(--color-background)] border-2 border-[var(--color-text)] text-[var(--color-text)] font-black rounded-full text-[24px] px-8 py-2 hover:bg-[var(--color-text)] hover:text-[var(--color-background)] hover:scale-110',
        danger:'bg-red-500 border-2 border-gray-700 text-white shadow-md',
        hero:''
    }
    return(
        <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${children} ${className}`}>
            {children}
        </button>
    )
}

export default Button