import React from 'react';
import {useInView} from 'react-intersection-observer';

const Reservs_b=({children})=>{
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
                    ?'opacity-100 translate-y-0'
                    :'opacity-0 translate-y-10'
                }
                `}
        >
            {children}
        </div>
    )
}

export default Reservs_b