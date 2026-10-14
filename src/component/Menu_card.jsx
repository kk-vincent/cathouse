import React from 'react';
import { useInView } from 'react-intersection-observer'


const Menu_card = ({
    cat_pic,
    theme,
    lines,
    className = '',
    ...props
}) => {
    const { ref, inView } = useInView({
        threshold: 0.15,
        triggerOnce: true
    })
    return (
        <div ref={ref}
            className={
                `
                transition-all duration-1000 ease-out transform
                ${inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-80'
                }
                `}>
            <div className='flex flex-col justify-center h-1/3 w-full'>
                <div className='flex h-1/2 w-full justify-center items-center'>
                    <img src={`${cat_pic}`} className='h-[324px] my-10' />
                </div>
                <div className='h-1/2  text-center text-[var(--color-text)] text-[32px]'>
                    <h2 className='font-bold '>{theme}</h2>
                    {lines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu_card