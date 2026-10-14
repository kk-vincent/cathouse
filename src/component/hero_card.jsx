import React from 'react';
import '../style/Hero/hero_img_hover.scss'

const Hero_card = ({
    CatPic1,
    CatPic2,
    CatPic3,
    card,
    className = '',
    ...props
}) => {
    return (
            <div className={`flex h-full justify-center items-center px-8 py-4 gap-4 ${card} `}>
                <div className='flex flex-col gap-4'>
                    <img src={CatPic1} className={`rounded-md ${className}`}/>
                    <img src={CatPic2} className={`rounded-md ${className}`}/>
                </div>
                <div >
                    <img src={CatPic3} className={`rounded-md ${className}`} />
                </div>
            </div >

    )
}
export default Hero_card