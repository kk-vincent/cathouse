import React, { useState } from 'react';


import Lcat1 from '../../pic/cat/Mask_group.png'
import Lcat2 from '../../pic/cat/unsplash_ecSFJk5yozU.png'
import Lcat3 from '../../pic/cat/unsplash_Hzu0-51klr4.png'

import Rorgcat1 from '../../pic/cat/IMG_01111.png'
import Rorgcat2 from '../../pic/cat/unsplash_Px3mOPhnoNg.png'
import Rorgcat3 from '../../pic/cat/unsplash_D60H6Qr5hJk.png'

import org1 from '../../pic/cat/orgcat/org1.png'
import org2 from '../../pic/cat/orgcat/org2.png'
import org3 from '../../pic/cat/orgcat/org3.png'

import whi1 from '../../pic/cat/whi/whi1.png'
import whi2 from '../../pic/cat/whi/whi2.png'
import whi3 from '../../pic/cat/whi/whi3.png'

import gra1 from '../../pic/cat/gray/gra1.png'
import gra2 from '../../pic/cat/gray/gra2.png'
import gra3 from '../../pic/cat/gray/gra3.png'

import '../../style/Hero/Hero_pic_L.scss'
import '../../style/Hero/overflow.scss'
import '../../style/Hero/hero_img_hover.scss'

import Hero_pic_card_L from '../../component/Hero_pic_L';
import Hero_card from '../../component/hero_card';
import Hero_card2 from '../../component/hero_card2';
import '../../style/Hero/hero_img_hover.scss'

const Hero_pic = () => {

    return (
        <section className="flex justify-cneter items-center  w-full  h-2/3 px-4 py-0  mx-0 gap-10 c-card gallery-container" style={{ backgroundImage: 'var(--color-background-hero-linear)' }}>
            <div className='flex justify-center items-center w-1/3 h-full px-0 ml-50'>
                <div className="accordion-container h-full">
                    <div className="card c-card_title1">
                        <img src={Lcat1} alt="Image 1" className='hover-card-1' />
                    </div>
                    <div className="card c-card_title2">
                        <img src={Lcat2} alt="Image 2" 
                        className='hover-card-2'/>
                    </div>
                    <div className="card c-card_title3">
                        <img src={Lcat3} alt="Image 3"
                        className='hover-card-3' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center w-2/3 h-full'>
                <div className='h-full '>
                    <div className='bg-[var(--color-background)] border-2 border-[var(--color-border)] rounded-xl relative'>
                        <div >
                            <Hero_card CatPic1={Rorgcat1} CatPic2={Rorgcat2} CatPic3={Rorgcat3} card='card-f container ' />
                            <Hero_card CatPic1={org1} CatPic2={org2} CatPic3={org3} card='card-1 absolute top-0 z-10' />
                            <Hero_card CatPic1={whi1} CatPic2={whi2} CatPic3={whi3} card='card-2 absolute top-0 z-10' />
                            <Hero_card2 CatPic1={gra1} CatPic2={gra2} CatPic3={gra3} card='card-3 absolute top-0 z-10' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero_pic