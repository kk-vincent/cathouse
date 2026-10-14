import React from 'react';
import '../style/Hero/hero_img_hover.scss'

const Hero_card2 = ({
    CatPic1,
    CatPic2,
    CatPic3,
    card,
    className = '',
    ...props
}) => {
    return (
            <div className={`flex h-full justify-around items-center px-8 py-4 ${card} gap-2 `}>
                
                    <img src={CatPic1} className={`rounded-md ${className} pb-30 `} />
                
                
                    <img src={CatPic2} className={`rounded-md ${className} pt-30 `}/>
                
                
                    <img src={CatPic3} className={`rounded-md ${className} `} />
                
            </div >

    )
}
export default Hero_card2