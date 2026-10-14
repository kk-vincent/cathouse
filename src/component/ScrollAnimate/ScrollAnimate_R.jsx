import React from 'react';
import {useInView} from 'react-intersection-observer';

const ScrollAnimate_R=({children})=>{
    const {ref,inView}=useInView({
        threshold:0.15,
        triggerOnce:true
    });

    return(
        <div
            ref={ref}
            className={
                `
                transition-all duration-1000 ease-out transform
                ${inView
                    ?'opacity-100 translate-x-0'
                    :'opacity-0 translate-x-80'
                }
                `}
        >
            {children}
        </div>
    )
}

export default ScrollAnimate_R