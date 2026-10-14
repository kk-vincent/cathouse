import React from 'react';

const About_menu=({
    theme,
    lines,
    ...props
})=>{
    return(
        <div className='mx-20 my-10 text-left'>
            <h3 className='text-[var(--color-border)] text-[32px] font-[500]'>{theme}</h3>
            <ul className='text-[30px]'>
                {lines .map((line,idx)=>(
                    <li key={idx} className='even:text-[var(--color-caption-text)] even:text-[20px]'>
                        {line}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default About_menu;