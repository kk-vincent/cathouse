import React from 'react';
import {useInView} from 'react-intersection-observer';

const Reservs_a=({children})=>{
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
                    ?'opacity-100 scale-100 rotate-0'
                    :'opacity-0 scale-20 rotate-360'
                }
                `}
        >
            {children}
        </div>
    )
}

export default Reservs_a