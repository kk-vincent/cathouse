import React,{useState} from 'react';


import Lcat1 from '../../pic/cat/Mask_group.png'
import Lcat2 from '../../pic/cat/unsplash_ecSFJk5yozU.png'
import Lcat3 from '../../pic/cat/unsplash_Hzu0-51klr4.png'

import Rorgcat1 from '../../pic/cat/IMG_01111.png'
import Rorgcat2 from '../../pic/cat/unsplash_Px3mOPhnoNg.png'
import Rorgcat3 from '../../pic/cat/unsplash_D60H6Qr5hJk.png'

import '../../style/Hero/Hero_pic_L.scss'

import '../../style/Hero/overflow.scss'

const Hero_pic=()=>{

    return(
        <section className="flex gap-5 bg-[var(--color-background-hero)] w-full h-[50vh] px-4 py-80 mx-0">
            <div className='flex item-center w-2/1 h-full '>
                <ul className="flex items-center">
                    <li className='h-ful  w-auto img-box accordion-container'>
                        <div><img src={Lcat1} alt='cst_pic' className='h-full  w-auto card'/></div>
                    </li>
                    <li className='h-ful  w-auto img-box  accordion-container'>
                        <div><img src={Lcat2} alt='cst_pic' className='h-full  w-auto card'/></div>
                    </li>
                    <li className='h-ful  w-auto img-box accordion-container'>
                        <div><img src={Lcat3} alt='cst_pic' className='h-full  w-auto card'/></div>
                    </li>
                </ul>
            </div>
            <div className='flex items-center w-2/1 h-full '>
                <div className='flex item-center items-center h-full'>
                    <div className='flex bg-[var(--color-background)] px-8 py-4 border-2 rounded-xl border-[var(--color-border)]'>
                        <div>
                            <ul>
                                <li><img src={Rorgcat1} className='' alt='cst_pic'/></li>
                                <li><img src={Rorgcat2} className='' alt='cst_pic'/></li>
                            </ul>
                        </div>
                        <div>
                            <img src={Rorgcat3} className='' alt='cst_pic'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero_pic
