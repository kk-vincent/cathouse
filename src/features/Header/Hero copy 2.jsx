import React, { useState } from 'react';


import Lcat1 from '../../pic/cat/Mask_group.png'
import Lcat2 from '../../pic/cat/unsplash_ecSFJk5yozU.png'
import Lcat3 from '../../pic/cat/unsplash_Hzu0-51klr4.png'

import Rorgcat1 from '../../pic/cat/IMG_01111.png'
import Rorgcat2 from '../../pic/cat/unsplash_Px3mOPhnoNg.png'
import Rorgcat3 from '../../pic/cat/unsplash_D60H6Qr5hJk.png'

import '../../style/Hero/Hero_pic_L.scss'
import '../../style/Hero/overflow.scss'
import '../../style/Hero/hero_img_hover.scss'

import Hero_pic_card_L from '../../component/Hero_pic_L';
import Hero_card from '../../component/hero_card';
import '../../style/Hero/hero_img_hover.scss'

const Hero_pic = () => {

    return (
        <section className="flex justify-cneter items-center  w-full h-2/3 px-4 py-0  mx-0 gap-10 c-card" style={{ backgroundImage: 'var(--color-background-hero-linear)' }}>
            <div className='flex justify-center items-center w-1/3 h-full px-0 ml-50'>
                <div className="accordion-container h-full">
                    <div className="card c-card_title1">
                        <img src={Lcat1} alt="Image 1" />
                    </div>
                    <div className="card c-card_title2">
                        <img src={Lcat2} alt="Image 2" />
                    </div>
                    <div className="card c-card_title3">
                        <img src={Lcat3} alt="Image 3" />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center w-2/3 h-full'>
                    <Hero_card CatPics_div1={[Rorgcat1,Rorgcat2]} CatPics_div2={[Rorgcat3]} className='border-2 border-[var(--color-border)] bg-[var(--color-background)] rounded-xl px-8 py-4'/>
            </div>
        </section>
    )
}

export default Hero_pic